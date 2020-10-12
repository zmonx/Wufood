// import React, { Component } from 'react';
// import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// export default class Address extends Component {

//   constructor(props) {
//      super(props);
//      this.state = {
//        data:"",
//      };
//   }
  
//   render() {
//     return (
//       <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
//          <Text>Address</Text>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
// import { SearchBar } from 'react-native-elements';
import { Text,Search, View, TextInput,StyleSheet, ImageBackground ,FlatList ,SearchBar,Image   } from 'react-native';

// import { SearchBar } from 'react-native-elements';
export default class StaffScreen extends Component {

  constructor(props) {
    super(props);
    const {navigation} =this.props;
    this.state = {
      data:''
    };
 }
 componentDidMount = () => {
  fetch('http://172.16.28.188/wufoodapi/select_api.php',{
     method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
     console.log(responseJson);
     this.setState({data: responseJson})
  })
  .catch((error) => {
     console.error(error);
  });
}



  render() {
    return (
      <ImageBackground
      source={require('./img/backhome.png')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
     
      <View style={styles.container}>        
      <Text></Text>
          <Text style={{fontSize: 25, marginTop: 10, marginLeft: 50}}>                PROFILE</Text>
          <Text></Text>

          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#ffff',
                textAlign: 'center',
                minHeight: 10,
                minWidth: 10,
                elevation: 50,
                borderRadius: 10,
                fontSize: 20,
                marginTop: 15,
                marginLeft: 10,
                marginRight: 10,
                color: '#5e3881',
              }}>
          <Text></Text>
              
              {/* <Image source={require('D:/xampp7/htdocs/mangrove/image/StaffsPhoto/7503.jpg')} /> */}
              <Text style={{fontSize: 17, marginTop: 10, marginLeft: 50}}>
              Name: {item.user_name}
              </Text>
              <Text style={{fontSize: 17, marginTop: 10, marginLeft: 50}}>
              Age: {item.user_age}
              </Text>
              <Text style={{fontSize: 17, marginTop: 10, marginLeft: 50}}>
              Email: {item.user_email}
              </Text>
              <Text style={{fontSize: 17, marginTop: 10, marginLeft: 50}}>
              Address: {item.user_address}
              </Text>
              <Text style={{fontSize: 17, marginTop: 10, marginLeft: 50}}>
              Phone: {item.phone}
              </Text>
          <Text></Text>

              {/* <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
              Photo: {item.SPhoto}
              </Text> */}
            </View>
            
          )}
        />


      
  </View>
  </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    // backgroundColor: '',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    // flex: 1, 
    // resizeMode: 'cover',
    width:50,
    height:50,
    marginBottom:30
  },
  xx: {
    // flex: 1, 
    // resizeMode: 'cover',
    width:50,
    height:50,
    marginBottom:30
  },
});


//     <View style={styles.container}>        
  //         <Text style={{color:'PURPLE'}}>       PROFILE</Text>

       