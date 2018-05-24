import React, {Component} from "react";
import {
    Text,
    Icon,
    Content,
    Button,
    Form,
    Item,
    Input,
    Card
} from "native-base";

import { View, Image, } from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class Settings extends React.Component {
    static navigationOptions = {
        showLabel: false,
        showIcon: true,
        tabBarIcon: <Icon name="ios-settings"/>,
        tabBarLabel: ''
    };

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
            newPass: '',
            verifyPass: ''
        }
    }

    changePass = () => {
        let loginData = {
            email: this.state.email,
            pass: this.state.pass,
        }

        Api.post({
            url:'login',
            data: loginData,
            success: this.loginSuccess
        })
    }
    changeEmail = () => {
        let loginData = {
            email: this.state.email,
            pass: this.state.pass,
        }

        Api.post({
            url:'login',
            data: loginData,
            success: this.loginSuccess
        })
    }

    loginSuccess = (response) => {
        if (response.status != 'error')

            Notification.sendToken(()=> this.props.navigation.navigate("MyAccount"));

    };

    render() {
        return (
            <View>
                <Text style={styles.texts_e}>Промяна на парола</Text>
                <Form>
                    <Item style={styles.inputContainer}>
                        <Input placeholder={I18n.t('pass', {locale: 'bg'})} value={this.state.pass} onChangeText = {(newValue) => this.setState({pass:newValue})}/>
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input secureTextEntry={true} placeholder={I18n.t('newPass',{locale: 'bg'})} value={this.state.newPass} onChangeText = {(newValue) => this.setState({newPass:newValue})}/>
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input secureTextEntry={true} placeholder={I18n.t('verifyPass',{locale: 'bg'})} value={this.state.verifyPass} onChangeText = {(newValue) => this.setState({verifyPass:newValue})}/>
                    </Item>
                </Form>

                <Button block style={styles.emailButton} onPress={() =>
                    this.changePass()
                }>
                    <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                </Button>

                <Text style={styles.texts_e}>Промяна на имейл</Text>

                <Form>
                    <Item style={styles.inputContainer}>
                        <Input placeholder={I18n.t('pass', {locale: 'bg'})} value={this.state.pass} onChangeText = {(newValue) => this.setState({pass:newValue})}/>
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input secureTextEntry={true} placeholder={I18n.t('email',{locale: 'bg'})} value={this.state.email} onChangeText = {(newValue) => this.setState({email:newValue})}/>
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input secureTextEntry={true} placeholder={I18n.t('newEmail',{locale: 'bg'})} value={this.state.newEmail} onChangeText = {(newValue) => this.setState({newEmail:newValue})}/>
                    </Item>
                </Form>

                <Button block style={styles.emailButton} onPress={() =>
                    this.changeEmail()
                }>
                    <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                </Button>
            </View>
        );
    }
}


export default Settings;