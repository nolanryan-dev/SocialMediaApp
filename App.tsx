import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  //All of the items in the stories
  const data = [
    {
      firstName: 'Joseph',
      id: 2,
    },
    {
      firstName: 'Angel',
      id: 3,
    },
    {
      firstName: 'White',
      id: 4,
    },
    {
      firstName: 'Olivier',
      id: 5,
    },
    {
      firstName: 'Nolan',
      id: 6,
    },
    {
      firstName: 'Adam',
      id: 7,
    },
    {
      firstName: 'Michal',
      id: 8,
    },
    {
      firstName: 'Luke',
      id: 9,
    },
  ];
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState([]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={'Lets Explore'} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
