import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    paddingTop: verticalScale(5),
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: horizontalScale(10),
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: horizontalScale(50),
    padding: horizontalScale(3),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    //marginBottom: verticalScale(20),
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(16),
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostButton: {
    marginRight: horizontalScale(27),
    flexDirection: 'row',
  },
  userPostStatIcon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
  userPostStatText: {
    color: '#79869F',
  },
});

export default style;
