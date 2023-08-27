import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 3,
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
    marginBottom: 20,
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  userPostButton: {
    marginRight: 27,
    flexDirection: 'row',
  },
  userPostStatIcon: {
    marginRight: 3,
    color: '#79869F',
  },
  userPostStatText: {
    color: '#79869F',
  },
});

export default style;
