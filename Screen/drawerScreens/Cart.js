import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Pressable,
  StyleSheet,
  Modal,
} from 'react-native';
var {width} = Dimensions.get('window');
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      modalVisible: false,
      total: 0,
    };
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  componentDidMount() {
    AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart);
          this.setState({dataCart: cartfood});
          this.state.dataCart.map((item, i) => {
            this.setState({
              total: this.state.total + item.price * item.quantity,
            });
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  onClickAddCart(data) {
    const itemcart = {
      food: data,
      quantity: 1,
      price: data.price,
    };

    AsyncStorage.getItem('cart')
      .then((datacart) => {
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart);
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        }
        alert('Add Cart');
      })
      .catch((err) => {
        alert(err);
      });
  }
  onChangeQual(i, type) {
    const dataCar = this.state.dataCart;
    let cantd = dataCar[i].quantity;

    if (type) {
      cantd = cantd + 1;
      dataCar[i].quantity = cantd;
      this.setState({dataCart: dataCar});
      this.state.dataCart.map((item, i) => {
        this.setState({
          total: this.state.total + item.price,
        });
      });
    } else if (type == false && cantd >= 2) {
      cantd = cantd - 1;
      dataCar[i].quantity = cantd;
      this.setState({dataCart: dataCar});
      this.state.dataCart.map((item, i) => {
        this.setState({
          total: this.state.total - item.price,
        });
      });
    } else if (type == false && cantd == 1) {
      dataCar.splice(i, 1);
      this.setState({dataCart: dataCar});
      this.state.dataCart.map((item, i) => {
        this.setState({
          total: this.state.total - item.price,
        });
      });
    }
    AsyncStorage.setItem('cart', JSON.stringify(dataCar));
  }

  render() {
    const {modalVisible, total} = this.state;
    return (
      <ImageBackground
        source={require('./img/backhome2.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{height: 20}} />
          <Text style={{fontSize: 32, fontWeight: 'bold', color: '#000'}}>
            Cart food
          </Text>
          <View style={{height: 10}} />

          <View style={{flex: 1}}>
            <ScrollView>
              {this.state.dataCart.map((item, i) => {
                return (
                  <View
                    style={{
                      width: width - 20,
                      margin: 10,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      borderColor: '#cccccc',
                      paddingBottom: 10,
                    }}>
                    <Image
                      resizeMode={'contain'}
                      style={{width: width / 3, height: width / 3}}
                      source={{uri: item.food.image}}
                    />
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'trangraysparent',
                        padding: 10,
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>
                          {item.food.name}
                        </Text>
                        <Text>Lorem Ipsum de food</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#000',
                            fontSize: 20,
                          }}>
                          ${item.price * item.quantity}
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() => this.onChangeQual(i, false)}>
                            <Icon
                              name="ios-remove-circle"
                              size={35}
                              color={'#7f3166'}
                            />
                          </TouchableOpacity>
                          <Text
                            style={{
                              paddingHorizontal: 8,
                              fontWeight: 'bold',
                              fontSize: 18,
                            }}>
                            {item.quantity}
                          </Text>
                          <TouchableOpacity
                            onPress={() => this.onChangeQual(i, true)}>
                            <Icon
                              name="ios-add-circle"
                              size={35}
                              color={'#7f3166'}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}

              <View style={{height: 20}} />

              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    this.setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Image
                        resizeMode={'contain'}
                        style={{width: width / 3, height: width / 3}}
                        source={{
                          uri:
                            'https://assets9.lottiefiles.com/packages/lf20_7foh1e6l.json',
                        }}
                      />
                      <Text style={styles.modalText}>
                        ราคารวมทั้งหมด = {this.state.total} บาท
                      </Text>

                      <Text style={styles.modalText}>ราคารวมทั้งหมด</Text>
                      <Text style={styles.modalTextPrice}>
                        {this.state.total}
                      </Text>
                      <Text style={styles.modalText}>บาท</Text>
                      <Pressable
                        style={[styles.button, styles.buttonOK, styles.TextBtn]}
                        onPress={() => this.setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>OK</Text>
                      </Pressable>
                      <Pressable
                        style={[
                          styles.button,
                          styles.buttonCancel,
                          styles.TextBtn,
                        ]}
                        onPress={() => this.setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>
                    </View>
                  </View>
                  {/* </View> */}
                </Modal>

                <Pressable
                  style={{
                    backgroundColor: '#7f3166',
                    width: width - 40,
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 5,
                    margin: 20,
                  }}
                  onPress={() => this.setModalVisible(true)}>
                  <Text style={styles.textStyle}>Check Out</Text>
                </Pressable>
              </View>

              <View style={{height: 20}} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  sizeModal: {
    width: 500,
    height: 500,
    alignItems: 'center',
  },
  modalView: {
    opacity: 0.95,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 500,
  },
  button: {
    borderRadius: 15,
    margin: 10,
    padding: 10,
    elevation: 6,
    width: 100,
    height: 50,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonOK: {
    backgroundColor: 'green',
  },
  buttonCancel: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  TextBtn: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalTextPrice: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  modalTextTopic: {
    marginBottom: 30,
    marginTop: 15,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#7f3166',
  },
});
