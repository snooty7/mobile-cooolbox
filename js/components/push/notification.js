import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import { Permissions, Notifications } from 'expo';
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

let token = '';

class PushNotification extends React.Component {

    constructor(props){
        super(props);
    }

    static sendToken = (callback) => {
        let loginToken = {
            token
        }

        Api.post({
            url: 'push',
            data: loginToken,
            success: callback(),
            error: callback()
        })
        console.log(callback + " error")
    };

    componentDidMount() {
        registerForPushNotificationsAsync();
    }
    render(){
        return null;
    }
}
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
     token = await Notifications.getExpoPushTokenAsync();

}

export default PushNotification;
