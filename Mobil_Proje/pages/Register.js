import React from 'react';
import {
    View, KeyboardAvoidingView, TextInput,
    StyleSheet, Text, TouchableOpacity,
    StatusBar, ScrollView
} from 'react-native';

function Register({navigation}) {

    return (

        <ScrollView style={styles.container}>
            <StatusBar translucent={false} />

            <KeyboardAvoidingView>

                <View style={styles.con}>

                    <Text style={styles.textFont}>CRYPTO APP</Text>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Adınız..."
                        placeholderTextColor="#003f5c"
                    />

                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                    />

                    <TextInput
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        secureTextEntry
                    />


                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>ÜYE OL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupText}>oturum aç</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#2a2d3c',
    },

    con: {

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },

    inputText: {
        width: "90%",
        marginBottom: 20,
        padding: 20,
        borderRadius: 25,
        height: 60,
        color: "black",
        backgroundColor: "white",
        fontSize: 16,
    },

    textFont: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#ffd24d",
        marginBottom: 50,
    },

    loginBtn: {
        width: "60%",
        backgroundColor: "#ffd24d",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 20
    },

    loginText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },

    signupText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 40,
    }

});

export default Register;