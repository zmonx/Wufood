// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// // import React from 'react';
// import * as React from 'react';


// //Import all required component
// // import { View, Text } from 'react-native';
// import 'react-native-gesture-handler';

// // import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// //import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // import FirstPage from '../drawerScreens/SecondPage';
// // import SecondPage from '../drawerScreens/FirstPage';
// import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';



// const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// const HomeScreen = () => {
//   global.currentScreenIndex = 'HomeScreen';
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
// //       <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
// //       <Text style={{ fontSize: 18, marginTop: 10 }}>
// //         Simple Login Registraction Example
// //       </Text>
// //       <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
// //     </View>
// //   );
// // };


// function TabStack() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#FFFFFF',
//         inactiveTintColor: '#F8F8F8',
//         style: {
//           backgroundColor: '#633689',
//         },
//         labelStyle: {
//           textAlign: 'center',
//         },
//         indicatorStyle: {
//           borderBottomColor: '#87B56A',
//           borderBottomWidth: 2,
//         },
//       }}>
//       <Tab.Screen
//         name="FirstPage"
//         component={FirstPage}
//         options={{
//           tabBarLabel: 'Home',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="home" color={color} size={size} />
//           // ),
//         }}  />
//       <Tab.Screen
//         name="SecondPage"
//         component={SecondPage}
//         options={{
//           tabBarLabel: 'Setting',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="settings" color={color} size={size} />
//           // ),
//         }} />
//     </Tab.Navigator>
//   );

//   function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Settings"
//           screenOptions={{
//             headerStyle: { backgroundColor: '#633689' },
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold' }
//           }}>
//           <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Tab Stack' }}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
// }
// // export default App;

// export default HomeScreen;




//This is an example of React Native Tab
import React from 'react';
//import react in our code.

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

//Import External Files
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export

const TabScreen = createMaterialTopTabNavigator(
  {
    "DEVIVERY": { screen: FirstPage },
    "PICK-UP": { screen: SecondPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'TabExample',
    },
  },
});
export default createAppContainer(App);


