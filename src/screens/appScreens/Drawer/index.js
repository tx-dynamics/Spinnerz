// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   ToastAndroid,
//   SafeAreaView,
// } from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {Colors, Images, Fonts} from 'src/utils'





// class Drawer extends Component {
 
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={styles.userInfoSection}>
//           <View style={styles.logoCircleDesign}>
//             <Image
//               source={Images.User}
//               style={{height: '60%', width: '60%', alignSelf: 'center'}}
//             />
//           </View>

//           <View style={styles.appNameView}>
//             <Text style={styles.appNameText}>
//               Hi there!
//             </Text>
//             <TouchableOpacity>
//               <Text style={styles.appNameDes}>View personal information</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.drawerContent}>
         
//           <View style={styles.firstDrawerSection}>
//             <DrawerItem
             
//               label={"Inbox"}
//               labelStyle={{color: Colors.blueWhale, fontWeight: '600'}}
//               onPress={() => this.props.navigation.navigate('Inbox')}
//             />
//             <View style={styles.barView}></View>
//           </View>
//           <View style={styles.drawerSection}>
//             <DrawerItem
            
//               label={"order"}
//               labelStyle={{color: Colors.blueWhale, fontWeight: '600'}}
//               onPress={() => this.props.navigation.navigate('Orders')}
//             />
//             <View style={styles.barView}></View>
//           </View>
//           <View style={styles.drawerSection}>
//             <DrawerItem
           
//               label={"Favrt"}
//               labelStyle={{color: Colors.blueWhale, fontWeight: '600'}}
//               onPress={() => this.props.navigation.navigate('Favourites')}
//             />
//             <View style={styles.barView}></View>
//           </View>
//           <View style={styles.drawerSection}>
//             <DrawerItem
              
//               label={"Point"}
//               labelStyle={{color: Colors.blueWhale, fontWeight: '600'}}
//               onPress={() => this.props.navigation.navigate('Punkte')}
//             />
//             <View style={styles.barView}></View>
//           </View>
//           <View style={styles.drawerSection}>
//             <DrawerItem
            
//               label={"Language"}
//               labelStyle={{color: Colors.blueWhale, fontWeight: '600'}}
//               onPress={() => this.props.navigation.navigate('SelectLanguage')}
//             />
//             <View style={styles.barView}></View>
//           </View>

        
//         </View>
//       </View>
//     );
//   }
// }

// export default Drawer;

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//     backgroundColor: Colors.green,
//     height: '10%',
//     marginTop: 0,
//     flexDirection: 'row',
//   },
//   drawerSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//   },
//   firstDrawerSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     marginTop: '3%',
//   },
//   logoutDrawerSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     width: '90%',
//     position: 'absolute',
//     bottom: 30,
//   },
//   drawerSection2: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     marginVertical: '5%',
//   },
//   drawerSection3: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//   },
//   drawerSection4: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     paddingBottom: '2%',
//   },
//   logoCircleDesign: {
//     backgroundColor: Colors.white,
//     borderRadius:
//       Math.round(
//         Dimensions.get('window').width + Dimensions.get('window').height,
//       ) / 2,
//     width: Dimensions.get('window').width * 0.12,
//     height: Dimensions.get('window').width * 0.12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '5%',
//   },
//   appNameView: {
//     margin: '5%',
//   },
//   appNameText: {
//     color: Colors.white,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   appNameDes: {
//     color: Colors.white,
//     fontSize: 12,
//     textDecorationLine: 'underline',
//   },
//   barView: {
//     borderBottomColor: '#f9f5f2',
//     borderBottomWidth: 2,
//   },
// });
