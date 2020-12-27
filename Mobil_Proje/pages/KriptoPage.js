import React, { Component } from 'react'
import firebase from 'firebase';
import {
    View, KeyboardAvoidingView, TextInput,
    StyleSheet, Text, TouchableOpacity,
    StatusBar, ScrollView, Alert,
    Dimensions, TouchableWithoutFeedback, Linking
} from 'react-native';
import NaviBar from '../src/components/NaviBar'
import Kriptolar from '../src/components/Kriptolar'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import Icon from 'react-native-vector-icons/Octicons';
import DrawerNavigator from "../navigation/DrawerNavigator";
import Kripto from "../navigation/DrawerNavigator";

export default class KriptoPage extends Component {

    state = {
        user: {},
        loading: false,
    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(auth => {
            if (auth) {
                firebase.database().ref('users').child(auth.uid).once('value', (snap) => {
                    this.setState({ user: snap.val() })
                })
            }
            else {
                this.props.navigation.navigate('Login')
            }
        })

    }

    SignOut = () => {
        Alert.alert(
            'Bildirim',
            'Çıkmak istediğinize emin misiniz?',
            [
                {
                    text: 'Hayır',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Evet',
                    onPress: () => firebase.auth().signOut(),
                },
            ],
        )
    };

    render() {
        return (
            <>
                <View>
                    <View style={{ backgroundColor: "#232632", flexDirection: "row", padding: Height / 40, paddingLeft: Height / 50, paddingRight: Height / 50, justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
                            CRYPTO App
                    </Text>
                        <FontAwesome5 size={30} name={'coins'} color="#fbd208" />
                    </View>

                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "black", margin: 20, }}>
                        Merhaba, {this.state.user.name}
                    </Text>
                </View>

                <ScrollView persistentScrollbar={true}>
                    <Kriptolar />
                </ScrollView>
            </>
        );
    }
}