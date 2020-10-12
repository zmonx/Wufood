// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React and Hook we needed
// import React, { useState } from 'react';

// //Import all required component
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   Image,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Loader from './Components/loader';

// const RegisterScreen = props => {
//   let [userName, setUserName] = useState('');
//   let [userEmail, setUserEmail] = useState('');
//   let [userAge, setUserAge] = useState('');
//   let [userAddress, setUserAddress] = useState('');
//   let [loading, setLoading] = useState(false);
//   let [errortext, setErrortext] = useState('');
//   let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

//   const handleSubmitButton = () => {
//     setErrortext('');
//     if (!userName) {
//       alert('Please fill Name');
//       return;
//     }
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userAge) {
//       alert('Please fill Age');
//       return;
//     }
//     if (!userAddress) {
//       alert('Please fill Address');
//       return;
//     }

//     //Show Loader
//     setLoading(true);
//     var dataToSend = {
//       user_name: userName,
//       user_email: userEmail,
//       user_age: userAge,
//       user_address: userAddress,
//     };
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('https://aboutreact.herokuapp.com/register.php', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status == 1) {
//           setIsRegistraionSuccess(true);
//           console.log('Registration Successful. Please Login to proceed');
//         } else {
//           setErrortext('Registration Unsuccessful');
//         }
//       })
//       .catch(error => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };
//   if (isRegistraionSuccess) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#7f3166',
//           justifyContent: 'center',
//         }}>
//         <Image
//           source={require('../Image/success.png')}
//           style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
//         />
//         <Text style={styles.successTextStyle}>Registration Successful.</Text>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           activeOpacity={0.5}
//           onPress={() => props.navigation.navigate('LoginScreen')}>
//           <Text style={styles.buttonTextStyle}>Login Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   return (
//     <View style={{ flex: 1, backgroundColor: '#cb7cba' }}>
//       <Loader loading={loading} />
//       <ScrollView keyboardShouldPersistTaps="handled">
//         <View style={{ alignItems: 'center' }}>
//           <Image
//             source={require('../Image/logo2.png')}
//             style={{
//               // width: '50%',
//               // height: 100,
//               // resizeMode: 'contain',
//               // margin: 30,
//               paddingTop: -30,
//             }}
//           />
//         </View>
//         <KeyboardAvoidingView enabled>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={UserName => setUserName(UserName)}
//               underlineColorAndroid="#FFFFFF"
//               placeholder="Enter Name"
//               placeholderTextColor="#F6F6F7"
//               autoCapitalize="sentences"
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 this._emailinput && this._emailinput.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={UserAddress => setUserAddress(UserAddress)}
//               underlineColorAndroid="#FFFFFF"
//               placeholder="Enter lastname"
//               placeholderTextColor="#F6F6F7"
//               autoCapitalize="sentences"
//               ref={ref => {
//                 this._addressinput = ref;
//               }}
//               returnKeyType="next"
//               onSubmitEditing={Keyboard.dismiss}
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={UserEmail => setUserEmail(UserEmail)}
//               underlineColorAndroid="#F6F6F7"
//               placeholder="Enter Email"
//               placeholderTextColor="#F6F6F7"
//               keyboardType="email-address"
//               ref={ref => {
//                 this._emailinput = ref;
//               }}
//               returnKeyType="next"
//               onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={UserAge => setUserAge(UserAge)}
//               underlineColorAndroid="#F6F6F7"
//               placeholder="Enter Password"
//               placeholderTextColor="#F6F6F7"
//               keyboardType="numeric"
//               ref={ref => {
//                 this._ageinput = ref;
//               }}
//               onSubmitEditing={() =>
//                 this._addressinput && this._addressinput.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
       
//           {errortext != '' ? (
//             <Text style={styles.errorTextStyle}> {errortext} </Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={handleSubmitButton}>
//             <Text style={styles.buttonTextStyle}>REGISTER</Text>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </ScrollView>
//     </View>
//   );
// };
// export default RegisterScreen;

// const styles = StyleSheet.create({
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#9900cc',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: 'white',
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   successTextStyle: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 30,
//   },
// });











/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */
//Import React and Hook we needed
import React, {Component} from 'react';
//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
  Alert,
} from 'react-native';
import { parseJsonText } from 'typescript';
import Loader from './Components/loader';
class RegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      name: '',
      age: '',
      email: '',
      address: '',
      phone: '',
    
    };
  }
  UserRegistrationFunction = () => {
    fetch('http://172.16.28.188/wufoodapi/register_api.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,

      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        
        // alert(parseJsonText(responseJson));
        // alert("01");
        
        this.props.navigation.navigate('LoginScreen')

        
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
        <View>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/logo2.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <KeyboardAvoidingView enabled>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(name) => this.setState({name: name})}
                  placeholder="Full Name"
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                />
              </View>
                <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(username) => this.setState({username: username})}
                  placeholder="username"
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(password) => this.setState({password: password})}
                  placeholder="Password"
                  placeholderTextColor="#F6F6F7"
                  // keyboardType="email-address"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(age) =>
                    this.setState({age: age})
                  }
                  placeholder="Age"
                  placeholderTextColor="#F6F6F7"
                  keyboardType="numeric"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(email) =>
                    this.setState({email: email})
                  }
                  placeholder="E-mail"
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="sentences"
                  keyboardType="email-address"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(address) =>
                    this.setState({address: address})
                  }
                  placeholder="Address"
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(phone) =>
                    this.setState({phone: phone})
                  }
                  placeholder="Phone"
                  placeholderTextColor="#F6F6F7"
                  keyboardType="numeric"
                  blurOnSubmit={false}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={this.UserRegistrationFunction}
                >
                <Text style={styles.buttonTextStyle}>REGISTER</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default RegisterScreen;
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#4682B4',
    borderWidth: 0,
    color: '#708090',
    borderColor: '#4169E1',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFAFA',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: '#32CD32',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});