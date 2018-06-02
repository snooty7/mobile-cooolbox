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

import {View, Image, BackHandler, Alert, KeyboardAvoidingView } from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class Settings extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="ios-settings-outline" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
            newPass: '',
            verifyPass: '',
            pass2: '',
            newEmail: ''
        }
    }

    changePass = () => {
        let passData = {
            pass: this.state.pass,
            verifyPass: this.state.verifyPass,
        }
        console.log(this.state.newPass);
        console.log(this.state.verifyPass);
        this._textInput5.setNativeProps({text: ''});
        this._textInput4.setNativeProps({text: ''});
        this._textInput3.setNativeProps({text: ''});
        if(this.state.newPass !== this.state.verifyPass) {
            Alert.alert('Грешка при смяна на паролата!!!');
            return true;
        }else {
            Api.post({
                url:'login',
                data: passData,
                success: this.changePassSuccess
            })
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    changeEmail = () => {
        let emailData = {
            pass2: this.state.pass2,
            email: this.state.email,
            newEmail: this.state.newEmail,
        }
        console.log(this.state.email);
        console.log(this.state.newEmail);
        this._textInput.setNativeProps({text: ''});
        this._textInput1.setNativeProps({text: ''});
        this._textInput2.setNativeProps({text: ''});
        if (!this.validateEmail(this.state.newEmail) || this. state.email === this.state.newEmail) {
            Alert.alert('Грешка при смяна на пощата!!!');
            return true;
        } else {
            Api.post({
                url: 'login',
                data: emailData,
                success: this.changeEmailSuccess
            })
        }

    }

    changeEmailSuccess = (response) => {
        console.log(response.status);
        if (response.status != 'error')

            Alert.alert('Вие успешно променихте пощата свързана с вашия профил!');
            this.props.navigation.navigate("Home");
        return true;

    };

    changePassSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert('Вие успешно променихте паролата свързана с вашия профил!');
            this.props.navigation.navigate("Home");
        return true;

    };

    render() {
        return (
            <Content>
                <Text style={{fontSize: 20, marginLeft: 100, marginTop: 5, marginBottom: 5}}>Промяна на парола</Text>
                <Form>
                        <Item style={styles.inputContainer}>
                            <Input placeholder={I18n.t('pass', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.pass} onChangeText = {(newValue) => this.setState({pass:newValue})}/>
                        </Item>
                        <Item style={styles.inputContainer}>
                            <Input secureTextEntry={true} placeholder={I18n.t('newPass',{locale: 'bg'})} ref={component4 => this._textInput4 = component4} value={this.state.newPass} onChangeText = {(newValue) => this.setState({newPass:newValue})}/>
                        </Item>
                        <Item style={styles.inputContainer}>
                            <Input secureTextEntry={true} placeholder={I18n.t('verifyPass',{locale: 'bg'})} ref={component3 => this._textInput3 = component3} value={this.state.verifyPass} onChangeText = {(newValue) => this.setState({verifyPass:newValue})}/>
                        </Item>

                    <Button block style={{margin: 15}} onPress={() =>
                        this.changePass()
                    }>
                        <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                    </Button>
                        <Text style={{fontSize: 20, marginLeft: 100, marginBottom: 5}}>Промяна на имейл</Text>

                            <Item style={styles.inputContainer}>
                                <Input placeholder={I18n.t('pass', {locale: 'bg'})} ref={component2 => this._textInput2 = component2} value={this.state.pass2} onChangeText = {(newValue) => this.setState({pass2:newValue})} />
                            </Item>
                            <Item style={styles.inputContainer}>
                                <Input secureTextEntry={true} placeholder={I18n.t('email',{locale: 'bg'})} ref={component1 => this._textInput1 = component1} value={this.state.email} onChangeText = {(newValue) => this.setState({email:newValue})} />
                            </Item>
                            <Item style={styles.inputContainer}>
                                <Input secureTextEntry={true} placeholder={I18n.t('newEmail',{locale: 'bg'})} ref={component => this._textInput = component} value={this.state.newEmail} onChangeText = {(newValue) => this.setState({newEmail:newValue})} />
                            </Item>
                </Form>
                    <Button block style={{margin: 15}} onPress={() =>
                        this.changeEmail()
                    }>
                        <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                    </Button>
            </Content>
        );
    }
}


export default Settings;