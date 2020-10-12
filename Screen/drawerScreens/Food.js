// Home screen
// import React, { Component } from 'react';
//import react in our code.
// import { Text, View } from 'react-native';
//import all the components we are going to use.
import React, {Component} from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      dataFood: [],
      selectCatg: 0,
    };
  }

  componentDidMount() {
    const url = 'http://tutofox.com/foodapp/api.json';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
          dataCategories: responseJson.categories,
          dataFood: responseJson.food,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onClickAddCart(data){

    const itemcart = {
      food: data,
      quantity:  1,
      price: data.price
    }
 
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        else{
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Add Cart")
      })
      .catch((err)=>{
        alert(err)
      })
  }

  render() {
    return (
      <ImageBackground
        source={require('./img/backhome.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={{width: width, alignItems: 'center'}}>
            <Text>  </Text>

              <Image
                style={{height: 60, width: width / 2, margin: 10}}
                resizeMode="contain"
                source={require('./img/foodapp2.png')}
              />
              <Text>  </Text>

              <Swiper
                style={{height: width / 2}}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={3}>
               
                    <Image
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={require('./img/b1.jpg')}
                    />
                    <Image
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={require('./img/b2.jpg')}
                    />
                    <Image
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={require('./img/b5.jpg')}
                    />
                     <Image
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={require('./img/b4.jpg')}
                    />
                    <Image
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={require('./img/b6.jpg')}
                    />
              </Swiper>
              <Text>  </Text>

              <View style={{height: 20}} />
            </View>
            <View
              style={{
                width: width,
                borderRadius: 20,
                paddingVertical: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
              }}>
              {/* <Text style={styles.titleCatg}>
                Categories {this.state.selectCatg}
              </Text> */}
              {/* <Text  style={{ borderBottomColor: 'white',  borderBottomWidth: 2, }}>  </Text> */}
              <Text>  </Text>
              <Text style={styles.titleCatg}>MENU</Text>
              <Text>  </Text>

              <FlatList
                horizontal={true}
                data={this.state.dataCategories}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
              <FlatList
                //horizontal={true}
                data={this.state.dataFood}
                numColumns={2}
                renderItem={({item}) => this._renderItemFood(item)}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={{height: 20}} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => this.setState({selectCatg: item.id})}
        style={[styles.divCategorie, {backgroundColor: item.color}]}>
        <Image
          style={{width: 100, height: 80}}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
      </TouchableOpacity>
    );
  
  }
  _renderItemFood(item) {
    let catg = this.state.selectCatg;
    if (catg == 0 || catg == item.categorie) {
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri: item.image}}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
              width: width / 2 - 20 - 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
            {item.name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{fontSize: 20, color: 'green'}}>${item.price}</Text>

          <TouchableOpacity
            onPress={()=>this.onClickAddCart(item)}
            style={{
              width:(width/2)-40,
              backgroundColor:'#7f3166',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4
            }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
  }


  }


const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,

  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    // color: 'white',

  },
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  },
});
