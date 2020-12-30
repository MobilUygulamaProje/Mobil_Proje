import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Bildirim({ navigation }) {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [baslik, setBaslik] = useState('');
  const [icerik, setİcerik] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {

    registerForPushNotifications();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, [])



  return (

    <>

      <View>
        <View style={{ backgroundColor: "#232632", flexDirection: "row", padding: Height / 40, paddingLeft: Height / 50, paddingRight: Height / 50, justifyContent: "space-between", alignItems: "center" }}>
          <Icon
            name="menu-sharp"
            size={30}
            color="white"
            onPress={() => navigation.openDrawer()}
          />

          <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
            CRYPTO App
        </Text>
          <FontAwesome5 size={30} name={'coins'} color="#fbd208" />
        </View>
      </View>

      <ScrollView style={{ backgroundColor: "#2a2d3c" }}>
        <KeyboardAvoidingView>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>


            <Text style={{
              color: "black",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 40,
              color: "#ffd24d"
            }}>
              BİLDİRİM GÖNDER
      </Text>

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
              placeholder="Başlık..."
              placeholderTextColor="#003f5c"
              onChangeText={text => setBaslik(text)}
              value={baslik}
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
              placeholder="İçerik..."
              placeholderTextColor="#003f5c"
              onChangeText={text => setİcerik(text)}
              value={icerik}
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
              onPress={() => { sendNotificationToAllUsers(baslik, icerik) }}

            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}>GÖNDER</Text>
            </TouchableOpacity>


          </View>
        </KeyboardAvoidingView>
      </ScrollView>


    </>
  );
}

export const registerForPushNotifications = async () => {
  const status = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let Fstatus = status;

  if (status !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    Fstatus = status;
  }
  if (Fstatus !== 'granted') { return; }
  let tokenim = await Notifications.getExpoPushTokenAsync();
  console.log(tokenim.data)

  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref("users").child(uid).update({
    Tokenim: tokenim.data
  });
}


async function sendPushNotification(Tokenim, baslik, icerik) {

  const message = {
    to: Tokenim,
    sound: 'default',
    title: baslik,
    body: icerik,
    data: { data: 'Bildirim' },
  };
  // console.log(message)
  // console.log("---------------------")

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export const sendNotificationToAllUsers = async (baslik, icerik) => {
  const users = await firebase.database().ref('/users').orderByChild('token');
  users.once("value").then(snapshot => {
    let tkn;
    snapshot.forEach((childSub) => {
      let childData = childSub.toJSON();
      tkn = childData.Tokenim;
      // console.log("---------------------")
      // console.log(tkn);
      sendPushNotification(tkn, baslik, icerik);
    });
  })
}