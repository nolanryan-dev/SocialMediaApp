import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(120),
    padding: horizontalScale(4),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontSize: scaleFontSize(20),
    fontWeight: '600',
    fontFamily: 'Inter',
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileStatsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
  },
});

export default style;
