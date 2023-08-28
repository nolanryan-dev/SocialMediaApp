import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(18),
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    marginTop: verticalScale(8),
  },
  UserImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 50,
  },
});

export default style;
