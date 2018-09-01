import React, {Component} from "react";
import { WebView, BackHandler } from 'react-native';
import {Container, Header, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form, Text, Toast
} from "native-base";

class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return false;
    }
    render() {
        return (
            <WebView
                source={{uri: 'https://my.cooolbox.bg/index.php/step.register'}}
                style={{marginTop: 20}}
            />
        );
    }
}
export default Registration;
