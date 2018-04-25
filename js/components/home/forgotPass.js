import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import Anchor from './anchor';
import {View} from "react-native";
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
