import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  UserImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: horizontalScale(2.5),
    borderRadius: horizontalScale(50),
  },
});

export default style;
