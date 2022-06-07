import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 52,
    width: '100%',
    // position: 'absolute',
    paddingHorizontal: 20,
    // top: -140,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  optionIconImg: {
    width: '100%',
    height: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuIcon: {
    height: 30,
    width: 30,
  },
  menuOptionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
