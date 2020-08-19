// Home screen
// import React, { Component } from 'react';
//import react in our code.
// import { Text, View } from 'react-native';
//import all the components we are going to use.
import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import Swiper from 'react-native-swiper'  
var {height, width } = Dimensions.get('window');




 

  export default class FirstPage extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        dataBanner:[]
      }
    }

    componentDidMount(){
      const url = "http://tutofox.com/foodapp/api.json"
      return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
  
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
        });
  
      })
      .catch((error) =>{
        console.error(error);
      });
    }
    

    render() {
      return (
        <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
          <View style={{width: width, alignItems:'center'}} >
              <Image style={{height:60,width:width/2,margin:10 }} resizeMode="contain" source={require("D:/Application/WUFood/Image/foodapp2.png")}  />
              <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}>
                {
                  this.state.dataBanner.map((itemmap)=>{
                    return(
                      <Image style={styles.imageBanner} resizeMode="contain" source={{uri:itemmap}}/>
                    )
                  })
                }
              </Swiper>
              <View style={{height:20}} />
          </View>
        </View>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    imageBanner: {
      height:width/2,
      width:width-40,
      borderRadius:10,
      marginHorizontal:20
    }, 
  });