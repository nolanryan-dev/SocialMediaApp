import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/main';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Emmanuel Robertsen</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={style.singleStatContainer}>
            <Text>45</Text>
            <Text>Following</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text>30M</Text>
            <Text>Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text>100</Text>
            <Text>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
