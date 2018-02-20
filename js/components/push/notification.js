import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import { Permissions, Notifications } from 'expo';
import * as firebase from 'firebase';
import {View} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Text,
    Toast
} from "native-base";

import styles from "./styles";
import Api from '../../../Api';

class Notification extends React.Component {

    componentDidMount() {
        registerForPushNotificationsAsync();
    }
    render(){
        return null;
    }
}
    let config = {
        apiKey: "AIzaSyBuPQX6o6IVEdqSdIcNK3ZqiH2j-xja-EQ",
        authDomain: "snooty-23276.firebaseapp.com",
        databaseURL: "https://snooty-23276.firebaseio.com/",
        storageBucket: "gs://snooty-23276.appspot.com"
    };
    firebase.initializeApp(config);
    // Get a reference to the database service
    let fDatabase = firebase.database();

    registerForPushNotificationsAsync = async () =>{
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log("KKKKKKKKK" + token);
        fDatabase.ref('users/' + 'phone').set({
            highscore: token
        });

}

export default Notification;
