import React from 'react';
import { Image, Text, View } from "react-native";
import PropTypes from 'prop-types';
import style from "./style";

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.UserImageContainer}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default UserStory;
