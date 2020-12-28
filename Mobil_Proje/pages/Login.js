import React, { Component } from 'react'
import firebase from 'firebase';
import {
  View, KeyboardAvoidingView, TextInput,
  StyleSheet, Text, TouchableOpacity,
  StatusBar, ScrollView, Alert
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { withOrientation } from 'react-navigation';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    loading: false,
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.props.navigation.dispatch(
          StackActions.replace('Kripto')
        )
      }
      else {

      }
    })

  }

  Giris = () => {

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {

      }).catch(() => {
        Alert.alert(
          'oops',
          'Giriş yapılamadı.',
          [
            { text: 'tamam' }
          ]
        )
      })
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#2a2d3c" }}>
        <StatusBar translucent={false} />
        <KeyboardAvoidingView>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
            <Text style={{ fontWeight: "bold", fontSize: 50, color: "#ffd24d", marginBottom: 50 }}>CRYPTO APP</Text>
            <TextInput
              style={{
                width: "90%",
                marginBottom: 20,
                padding: 20,
                borderRadius: 25,
                height: 60,
                color: "black",
                backgroundColor: "white",
                fontSize: 16,
              }}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              keyboardType='email-address'
              onChangeText={email => this.setState({ email: email })}
              value={this.state.email}
            />

            <TextInput
              style={{
                width: "90%",
                marginBottom: 20,
                padding: 20,
                borderRadius: 25,
                height: 60,
                color: "black",
                backgroundColor: "white",
                fontSize: 16,
              }}
              placeholder="Şifreniz..."
              placeholderTextColor="#003f5c"
              secureTextEntry
              onChangeText={password => this.setState({ password: password })}
              value={this.state.password}
            />

            <TouchableOpacity
              style={{
                width: "60%",
                backgroundColor: "#ffd24d",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 20
              }}
              onPress={() => this.Giris()}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}>OTURUM AÇ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginTop:30}}
              onPress={() => this.props.navigation.navigate('Register')} >
              <Text style={{color:"white"}}>
                Üye değil misin ?{' '}
                <Text style={{ fontWeight: '500', color: '#ffd24d' }}>Kayıt ol</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
