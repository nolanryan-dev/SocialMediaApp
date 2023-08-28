import React from 'react';
import style from './style';
import {Image, View} from 'react-native';

const UserProfileImage = () => {
  return (
    <View style={style.UserImageContainer}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
};

export default UserProfileImage;
