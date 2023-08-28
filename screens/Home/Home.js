import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/main';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'Nolan',
      id: 5,
    },
    {
      firstName: 'Adam',
      id: 6,
    },
    {
      firstName: 'Michal',
      id: 7,
    },
    {
      firstName: 'Luke',
      id: 8,
    },
    {
      firstName: 'Mike',
      id: 9,
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 571,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nolan',
      lastName: 'Ryan',
      location: 'Melbourne, Victoria',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 4,
    },
    {
      firstName: 'Nolan',
      lastName: 'Ryan',
      location: 'Melbourne, Australia',
      likes: 1200,
      comments: 143,
      bookmarks: 76,
      id: 5,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 245,
      comments: 32,
      bookmarks: 34,
      id: 6,
    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));

  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderDataPosts, setRenderDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log(screenData);
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('changed screen data', result.screen);
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex);
    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }

    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={20}
                />
                <View style={style.messageNumberContainer}>
                  <Text
                    style={[
                      style.messageNumber,
                      {fontSize: screenData.height / 130},
                    ]}>
                    2
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoading(false)}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + ' post'}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
