import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
    elevation: 12,
    // backgroundColor: "green",
    // borderTopWidth:1,
    // borderTopColor:"green"
  },
  focusedButton: {
    position: 'absolute',
    height: 64,
    width: 64,
    zIndex: -1,
    borderRadius: 32,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:7
  },
  unfocusedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    elevation: 12,
    zIndex: 12,
  },
});
