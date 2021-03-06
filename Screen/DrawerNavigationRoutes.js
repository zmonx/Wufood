/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens
// import HomeScreen from './drawerScreens/HomeScreen';
import location from './drawerScreens/location';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
// import Cart from './drawerScreens/Cart';
// import lo from './drawerScreens/location';
// import HomeScreen from './drawerScreens/HomeScreen';
import FirstPage from './drawerScreens/FirstPage'

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: FirstPage,
    navigationOptions: ({navigation}) => ({
      title: 'WU FOOD CENTER',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#7f3166',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: location,
    navigationOptions: ({navigation}) => ({
      title: 'location',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#7f3166',
      },
      headerTintColor: '#fff',
    }),
  },
});

// const ThirdActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: Cart,
//     navigationOptions: ({navigation}) => ({
//       title: 'Cart',
//       headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#7f3166',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },

    location: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'location',
      },
    },

    // Cart: {
    //   screen: ThirdActivity_StackNavigator,
    //   navigationOptions: {
    //     drawerLabel: 'Cart',
    //   },
    // },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default DrawerNavigatorRoutes;
