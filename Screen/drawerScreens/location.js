// //* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// // import React from 'react';

// // //Import all required component
// // import { View, Text } from 'react-native';

// // const location = () => {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
// //       <Text style={{ fontSize: 23, marginTop: 10 }}>location</Text>
// //       <Text style={{ fontSize: 18, marginTop: 10 }}>
// //         Simple Login Registraction Example
// //       </Text>
// //       <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
// //     </View>


// //   );
// // };
// // export default location;

// /*This is an Example of React Native Map*/
// import React from 'react';
// import { StyleSheet, Text, View , TextInput} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
 
// export default class location extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       latitude: 0,
//       longitude: 0
//     };
//   }

//   componentDidMount(){
//     navigator.geolocation.getCurrentPosition(
//       position => {
//       this.setState({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         error:null
//       });
//     },
//       error => this.setState({ error: error.message}),
//       {enableHighAccuracy:true,timeout:2000, maximumAge:2000}
//     );
//   }

//   // onRegionChange(region) {
//   //   this.setState({ region });
//   // }
//   render() {
//     // var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0,
//             longitudeDelta: 0,
//           }}
//           // customMapStyle={mapStyle}
//         >
//           <Marker coordinate={this.state}
//             draggable
//             coordinate={{
//               latitude: 16.50,
//               longitude: 29.40,
//             }}
//             onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
//             title={'Test Marker'}
//             description={'This is a description of the marker'}
//           />
//         </MapView>
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     // position:'absolute',
//     // top:0,
//     // left:0,
//     // right:0,
//     // bottom:0,
//     // alignItems: 'center',
//     // justifyContent: 'flex-end',
//     ...StyleSheet.absoluteFillObject

//   },
//   map: {
//     // position:'absolute',
//     // top:0,
//     // left:0,
//     // right:0,
//     // bottom:0,
//     ...StyleSheet.absoluteFillObject
//   },
// });





/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */
//Import React
import React from 'react';
//Import all required component
import {StyleSheet, Text, View, TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
export default class Guide extends React.Component {
  onRegionChange(region) {
    this.setState({region});
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     region: {
  //       latitude: 10,
  //       longitude: 10,
  //       latitudeDelta: 0.001,
  //       longitudeDelta: 0.001,
  //     },
  //   };
  // }
  render() {
    var mapStyle =  [
      {elementType: 'geometry', stylers: [{color: '#f5f1e6'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{color: '#c9b2a6'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{color: '#dcd2be'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ae9e90'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#93817c'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{color: '#a5b076'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#447530'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{color: '#fdfcf8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#f8c967'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e9bc62'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{color: '#e98d58'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{color: '#db8555'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#806b63'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8f7d77'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ebe3cd'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#b9d3c2'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#92998d'}]
      }
    ];



    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 7.542139,
            longitude: 99.600392,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker coordinate={{latitude: 7.542139, longitude: 99.600392}} />
          <Marker coordinate={{latitude: 8.542139, longitude: 99.600392}} />
          <Marker coordinate={{latitude: 9.542139, longitude: 99.600392}} />
          <Marker coordinate={{latitude: 7.542138, longitude: 99.600392}} />
          <Marker coordinate={{latitude: 7.542131, longitude: 99.600392}} />
          <Marker coordinate={{latitude: 7.54213, longitude: 99.600392}} />
        </MapView>
        {/* <MapView
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          onMapReady={this.onMapReady}
          onRegionChangeComplete={this.onRegionChange}>
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            title={'Your Location'}
            draggable
          />
        </MapView> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});