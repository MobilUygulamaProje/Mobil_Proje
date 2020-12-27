import React, {Component} from 'react'
import firebase from 'firebase';
import {
  View, KeyboardAvoidingView, TextInput,
  StyleSheet, Text, TouchableOpacity,
  StatusBar, ScrollView, Alert
} from 'react-native';
import { StackActions } from '@react-navigation/native';

export default class Login extends Component {

  state={
    name:'',
    email:'',
    password:'',
    loading:false,
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(auth =>{
        if(auth){
          this.props.navigation.dispatch(
            StackActions.replace('Kripto')
          )
        }
        else{
          
        }
      })
  }

  KayitOl = () => {

    this.setState({loading:true})
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((auth) => {
      let uid = auth.user.uid;
      this.createUser(uid);
      this.props.navigation.dispatch(
        StackActions.replace('Kripto')
      )
    }).catch((err)=>{
      this.setState({loading:false});
      Alert.alert(
        'oops',
        'Kayıt olunmadı, tekrar dene!',
        [
          {text:'Tamam'}
        ]
      )
    })
  }

  createUser = (uid) =>{
    firebase.database().ref('users').child(uid).set({
      email:this.state.email,
      uid:uid,
      name:this.state.name,

    });
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:"#2a2d3c"}}>
            <StatusBar translucent={false} />
            <KeyboardAvoidingView>
                <View style={{alignItems:'center', justifyContent:'center', marginTop:80}}>
                    <Text style={{fontWeight:"bold", fontSize:50, color:"#ffd24d", marginBottom:30}}>CRYPTO APP</Text>
                    <Text style={{fontWeight:"bold", fontSize:20, color:"#ffd24d", marginBottom:20}}>Register Page</Text>
                    <TextInput     
                        style={{width:"90%", 
                        marginBottom:20, 
                        padding:20,
                        borderRadius:25,
                        height:60,
                        color:"black",
                        backgroundColor:"white",   
                        fontSize:16,}} 
                        placeholder="name..."
                        placeholderTextColor="#003f5c"
                        onChangeText={name=>this.setState({name:name})}
                        value={this.state.name}
                    />
                    
                    <TextInput     
                        style={{width:"90%", 
                        marginBottom:20, 
                        padding:20,
                        borderRadius:25,
                        height:60,
                        color:"black",
                        backgroundColor:"white",   
                        fontSize:16,}} 
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        keyboardType='email-address'
                        onChangeText={email=>this.setState({email:email})}
                        value={this.state.email}
                    />

                    <TextInput
                        style={{width:"90%", 
                        marginBottom:20, 
                        padding:20,
                        borderRadius:25,
                        height:60,
                        color:"black",
                        backgroundColor:"white",   
                        fontSize:16,}} 
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        secureTextEntry
                        onChangeText={password=>this.setState({password:password})}
                        value={this.state.password}
                    />

                   

                    <TouchableOpacity
                    style={{width: "60%",
                    backgroundColor: "#ffd24d",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40,
                    marginBottom: 20
                    }}
                    onPress={() => this.KayitOl()}
                    >
                        <Text
                         style={{color: "black",
                         fontSize: 16,
                         fontWeight: "bold",}}>Kayıt ol</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{color:"white"}} >OTURUM AÇ</Text>
                    </TouchableOpacity>

                    </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}
