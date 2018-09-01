import React, {Component} from "react";
import { WebView, BackHandler } from 'react-native'
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

class ForgotPass extends React.Component {

    render() {
        return (
            <WebView
                source={{uri: 'https://my.cooolbox.bg/index.php/step.lostpass'}}
                style={{marginTop: 20}}
            />
        );
    }
}

export default ForgotPass;
