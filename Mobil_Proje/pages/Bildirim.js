import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TextInput } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function addPost() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(()=>{
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
  },[])



  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableHighlight onPress={()=>{sendNotificationToAllUsers()}}>
        <Text>Bildirim Göndermek İçin Tıkla!</Text>
      </TouchableHighlight>      
    </View>
  );
}

export const registerForPushNotifications = async() =>{
  const status = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let Fstatus=status;
  
  if (status !== 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      Fstatus=status;
  }
  if (Fstatus !== 'granted') {return;}
  let tokenim=await Notifications.getExpoPushTokenAsync();
  console.log(token.data)

  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref("users").child(uid).update({
    Tokenim: tokenim.data
  });
}


async function sendPushNotification(Tokenim) {
  const message = {
      to: Tokenim,
      sound: 'default',
      title: "Crpyto",
      body: "Son Dakika Crpyto Paralarina Bak.",
      data: { data: 'Bildirim' },
  };
  console.log(message)
  console.log("---------------------")

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

export const sendNotificationToAllUsers = async () => {
  const users = await firebase.database().ref('/users').orderByChild('token');
  users.once("value").then(snapshot => {
      let tkn;
      snapshot.forEach((childSub) => {
          let childData = childSub.toJSON();
          tkn = childData.Tokenim;
          console.log("---------------------")
          console.log(tkn);
          sendPushNotification(tkn);
      });
  })
}