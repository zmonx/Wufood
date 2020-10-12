
// import React from 'react';
// //Import all required component
// import {StyleSheet, Text, View, TextInput} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// export default class Guide extends React.Component {
//   onRegionChange(region) {
//     this.setState({region});
//   }
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     loading: true,
//   //     region: {
//   //       latitude: 10,
//   //       longitude: 10,
//   //       latitudeDelta: 0.001,
//   //       longitudeDelta: 0.001,
//   //     },
//   //   };
//   // }
//   render() {
//     var mapStyle =  [
//       {elementType: 'geometry', stylers: [{color: '#f5f1e6'}]},
//       {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
//       {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
//       {
//         featureType: 'administrative',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#c9b2a6'}]
//       },
//       {
//         featureType: 'administrative.land_parcel',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#dcd2be'}]
//       },
//       {
//         featureType: 'administrative.land_parcel',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#ae9e90'}]
//       },
//       {
//         featureType: 'landscape.natural',
//         elementType: 'geometry',
//         stylers: [{color: '#f5f1e6'}]
//       },
//       {
//         featureType: 'poi',
//         elementType: 'geometry',
//         stylers: [{color: '#f5f1e6'}]
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#93817c'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'geometry.fill',
//         stylers: [{color: '#a5b076'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#447530'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{color: '#f5f1e6'}]
//       },
//       {
//         featureType: 'road.arterial',
//         elementType: 'geometry',
//         stylers: [{color: '#fdfcf8'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [{color: '#f8c967'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#e9bc62'}]
//       },
//       {
//         featureType: 'road.highway.controlled_access',
//         elementType: 'geometry',
//         stylers: [{color: '#e98d58'}]
//       },
//       {
//         featureType: 'road.highway.controlled_access',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#db8555'}]
//       },
//       {
//         featureType: 'road.local',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#806b63'}]
//       },
//       {
//         featureType: 'transit.line',
//         elementType: 'geometry',
//         stylers: [{color: '#f5f1e6'}]
//       },
//       {
//         featureType: 'transit.line',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#8f7d77'}]
//       },
//       {
//         featureType: 'transit.line',
//         elementType: 'labels.text.stroke',
//         stylers: [{color: '#ebe3cd'}]
//       },
//       {
//         featureType: 'transit.station',
//         elementType: 'geometry',
//         stylers: [{color: '#f5f1e6'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry.fill',
//         stylers: [{color: '#b9d3c2'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#92998d'}]
//       }
//     ];



    
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: 7.542139,
//             longitude: 99.600392,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           customMapStyle={mapStyle}>
//           <Marker coordinate={{latitude: 7.542139, longitude: 99.600392}} />
//           <Marker coordinate={{latitude: 8.542139, longitude: 99.600392}} />
//           <Marker coordinate={{latitude: 9.542139, longitude: 99.600392}} />
//           <Marker coordinate={{latitude: 7.542138, longitude: 99.600392}} />
//           <Marker coordinate={{latitude: 7.542131, longitude: 99.600392}} />
//           <Marker coordinate={{latitude: 7.54213, longitude: 99.600392}} />
//         </MapView>
//         {/* <MapView
//           style={styles.map}
//           initialRegion={this.state.region}
//           showsUserLocation={true}
//           onMapReady={this.onMapReady}
//           onRegionChangeComplete={this.onRegionChange}>
//           <MapView.Marker
//             coordinate={{
//               latitude: this.state.region.latitude,
//               longitude: this.state.region.longitude,
//             }}
//             title={'Your Location'}
//             draggable
//           />
//         </MapView> */}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });


import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
var {height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

import Geolocation from '@react-native-community/geolocation';

export default class Address extends Component {

  constructor(props) {
     super(props);
     this.state = {
       data:"",
       latitude:7.542139,
       longitude:99.600392
     };
  }

  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>

           <MapView
           style={{width:width, height:height-60}}
            region={{
              latitude:  this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0121,
            }}
            onPress={(e) => this.onClickMap(e.nativeEvent)}

          >



          <MapView.Marker draggable
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            onDragEnd={(e) => this.movementMarker(e.nativeEvent)}
            title="Here"  />
        </MapView>

        <TouchableOpacity style={{
            backgroundColor:"white",
            height:60, width:60,
            borderRadius:50,
            alignItems:'center',
            padding:5,
            position:"absolute",
            top :10 ,
            right:10
          }} onPress={()=>this._getLocation()}>
          <Icon name="md-locate" size={50} color={"gray"}  />
        </TouchableOpacity>

      </View>
    );
  }

  _getLocation()
  {
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      })
    },(error)=>{
      console.log(JSON.stringify(error))
    })
  }

  movementMarker(e){
    // get coordinate from mapviews
    const { latitude, longitude } = e.coordinate
    // update coordinate
    this.setState({
      latitude: latitude,
      longitude: longitude
    })
  }

  onClickMap(e)
 {
   const {latitude,longitude} = e.coordinate
   this.setState({
     latitude: latitude,
     longitude: longitude
   })
 }

}