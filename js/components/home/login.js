import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import Anchor from './anchor';
import {View, TouchableHighlight} from "react-native";
import forgotPass from "./forgotPass";
import registration from "./registration";

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

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:''
        }
    }

    login = () => {
        let loginData = {
            email: this.state.email,
            pass: this.state.pass,
        }

        Api.post({
            url:'login',
            data: loginData,
            success: this.loginSuccess
        })

    };

    loginSuccess = (response) => {
        if (response.status != 'error')
        this.props.navigation.navigate("MyAccount")
    };

    _handlePressPass = () => {
        this.props.navigation.navigate("forgotPass")
    }
    _handlePressReg = () => {
        this.props.navigation.navigate("Registration")
    };

    render() {
        return (
            <View>
                <Form>
                    <Item style={styles.inputContainer}>
                        <Input placeholder={I18n.t('email', {locale: 'bg'})} value={this.state.email} onChangeText = {(newValue) => this.setState({email:newValue})}/>
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input secureTextEntry={true} placeholder={I18n.t('pass',{locale: 'bg'})} value={this.state.pass} onChangeText = {(newValue) => this.setState({pass:newValue})}/>
                    </Item>
                </Form>

                <View>
                    <TouchableHighlight onPress={this._handlePressPass}>
                        <Text style={styles.forgotPass}> Забравена парола </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._handlePressReg}>
                        <Text style={styles.registration}> Регистрация </Text>
                    </TouchableHighlight>
                </View>
                <Button block style={styles.loginButton} onPress={() =>

                    this.login()
                    //this.props.navigation.navigate("MyAccount")
                }>
                    <Text>{I18n.t('login',{locale: 'bg'}).toUpperCase()}</Text>
                </Button>
            </View>
        );
    }
}

export default Login;
