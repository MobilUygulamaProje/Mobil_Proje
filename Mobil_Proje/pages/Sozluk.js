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

    render() {
        return (
            <View style={{marginBottom: 110}}>
                <View style={{backgroundColor: "#232632", flexDirection: "row", padding: Height / 40, paddingLeft: Height / 50, paddingRight: Height / 50, justifyContent: "space-between", alignItems: "center" }}>
                    <FontAwesome5 size={30} name={'coins'} color="#fbd208" />
                    <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
                        CRYPTO App
                    </Text>
                    <FontAwesome5 size={30} name={'coins'} color="#fbd208" />
                </View>

                <ScrollView persistentScrollbar={true}>
                    <Text style={styles.TerimBold}>
                        %51 Saldırısı: Kripto para madenciliğinde bir ağda üretim yapan tek bir madencinin yada bir grup madencinin üretim gücünün yarısından fazlasını yapar hale gelmesidir.
                </Text>
                <Text style={styles.Terim}>
                        Altcoin: Bitcoin’e alternatif olarak sunulan kripto para birimleri için kullanılan toplu isim.
                </Text>
                <Text style={styles.TerimBold}>
                        Bitcoin: Sembolü B, kısaltması BTC olan sanal para birimidir.
                </Text>
                <Text style={styles.Terim}>
                        BTC: Bitcoin’ ler için para birimi kısaltmasıdır. Türk Lirasına TL deniliyor olması gibi.
                </Text>
                <Text style={styles.TerimBold}>
                        Cryptocurrency: Kripto para birimi, kriptografiye dayalı matematiksel problemleri çözerek üretilen dijital veri.
                </Text>
                <Text style={styles.Terim}>
                        Kilohash: Binlerce çıkarım içinde ölçülen, saniyedeki olası çıkarım girişimlerinin sayısıdır.
                </Text>
                <Text style={styles.TerimBold}>
                        Litecoin: Scrypt kanıtına dayalı bir altcoindir.
                </Text>
                <Text style={styles.Terim}>
                        mBTC: Bir Bitcoin’in binde birine verilen isimdir. (0.001 BTC).
                </Text>
                <Text style={styles.TerimBold}>
                        Megahash: Milyonlarca çıkarım içinde ölçülen, saniyedeki olası çıkarım girişimlerinin sayısıdır.
                </Text>
                <Text style={styles.Terim}>
                        Mining: Bilgisayar donanım kullanılarak, şifrelenmiş sorunları çözerek, yeni Bitcoin’ler ya da altcoin’ler üretme eylemidir.
                </Text>
                <Text style={styles.TerimBold}>
                        Node: İşlemleri başkalarına bağlı bir kullanıcı tarafından Bitcoin ağına bağlı bir bilgisayarı ifade eder.
                </Text>
                <Text style={styles.Terim}>
                        Output: Bir Bitcoin işlem için hedef adresidir. Tek bir işlem için birden fazla çıktı olabilir.
                </Text>
                <Text style={styles.TerimBold}>
                        Paper Wallet: Bir veya daha fazla açık bitcoin adresi ve bunlara karşılık gelen özel anahtarları içeren basılı bir levhadır.
                </Text>
                <Text style={styles.Terim}>
                        Public Key: Herkes ile paylaşılan açık bitcoin adresini ifade eder.
                </Text>
                <Text style={styles.TerimBold}>
                        Satoshi: Bitcoin’in milyonda birine verilen isimdir. (0.0000001 BTC)
                </Text>
                <Text style={styles.Terim}>
                        Silk Road: Genellikle Bitcoin gibi kriptolu para birimi ile genelde yasadışı alışverişler için kullanılan bir yeraltı çevrimiçi pazarıdır.
                </Text>
                <Text style={styles.TerimBold}>
                        uBTC: Bitcoin’in yüz binde biri (0.000001 BTC): Scrypt kanıtına dayalı bir altcoindir.
                </Text>

                </ScrollView>

            </View>
        );
    }
}

const styles= StyleSheet.create({
    Terim:{
        fontSize: 15, color: "black", margin: 20,
    },
    TerimBold:{
        fontWeight: "bold",fontSize: 15, color: "black", margin: 20,
    },
})