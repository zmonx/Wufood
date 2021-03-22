import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  Alert,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
// import { Button } from 'react-native';
import RegisterScreen from './RegisterScreen';

export default class LoginScreen extends React.Component {
  // Setting up Login Activity title.

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      UserEmail: '',
      UserPassword: '',
    };
  }

  UserLoginFunction = () => {
    const {UserEmail} = this.state;
    const {UserPassword} = this.state;

    fetch('http://172.16.93.39/wufoodapi/login_api.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: UserEmail,

        password: UserPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});

        // If server response message same as Data Matched
        if (responseJson === 'Data Matched') {
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('DrawerNavigationRoutes');

          // props.navigation.navigate('DrawerNavigationRoutes');
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../Image/backhome.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={styles.mainBody}>
          {/* <Loader loading={loading} /> */}

          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{marginTop: 100}}>
              <KeyboardAvoidingView enabled>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../Image/logo2.png')}
                    style={{
                      paddingTop: -30,
                      //   width: '50%',
                      //   height: '50%',
                      //   // resizeMode: 'contain',
                      //   // margin: 30,
                    }}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserEmail) => this.setState({UserEmail})}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Email" //dummy@abc.com
                    placeholderTextColor="#F6F6F7"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserPassword) =>
                      this.setState({UserPassword})
                    }
                    underlineColorAndroid="transparent"
                    placeholder="Enter Password" //12345
                    placeholderTextColor="#F6F6F7"
                    keyboardType="default"
                    secureTextEntry={true}
                  />
                </View>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={this.UserLoginFunction}>
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <Text
                  style={styles.registerTextStyle}
                  onPress={() =>
                    this.props.navigation.navigate('RegisterScreen')
                  }>
                  New Here ? Register
                </Text>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#cb7cba',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    color: '#9900cc',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#9900cc',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
    fontSize: 16,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
