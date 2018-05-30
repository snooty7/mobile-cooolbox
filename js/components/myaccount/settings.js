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

import {View, Image, Alert, KeyboardAvoidingView } from "react-native";

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

        if(this.state.newPass !== this.state.verifyPass) {
            Alert.alert(
                'Грешка при смяна на паролата!!!',
                'Паролите не съвпадат!',
                [
                    {text: 'OK', onPress: () => console.log('Ок Pressed')},
                ],
                {cancelable: false}
            )
            return true;
        }else {
            Api.post({
                url:'login',
                data: passData,
                success: this.changePassSuccess
            })
        }
    }
    changeEmail = () => {
        let emailData = {
            email: this.state.email,
            newEmail: this.state.newEmail,
        }
        Api.post({
            url:'login',
            data: emailData,
            success: this.changeEmailSuccess
        })

    }

    changeEmailSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert(
                'Смяна на поща',
                'Вие успешно променихте пощата свързана с вашия профил!',
                [
                    {text: 'OK', onPress: () => console.log('Ок Pressed')},
                ],
                {cancelable: false}
            )
        return true;


    };

    changePassSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert(
                'Смяна на парола',
                'Вие успешно променихте паролата свързана с вашия профил!',
                [
                    {text: 'OK', onPress: () => console.log('Ок Pressed')},
                ],
                {cancelable: false}
            )
        return true;


    };

    render() {
        return (
            <Content contentContainerStyle={{flex: 1}}
            >
                <Text style={{fontSize: 20, marginLeft: 100, marginTop: 5, marginBottom: 5}}>Промяна на парола</Text>
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

                <Button block style={{margin: 15}} onPress={() =>
                    this.changePass()
                }>
                    <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                </Button>
                    <Text style={{fontSize: 20, marginLeft: 100, marginBottom: 5}}>Промяна на имейл</Text>

                    <Form>
                        <Item style={styles.inputContainer1}>
                            <Input placeholder={I18n.t('pass', {locale: 'bg'})} value={this.state.pass2} onChangeText = {(newValue) => this.setState({pass2:newValue})}/>
                        </Item>
                        <Item style={styles.inputContainer1}>
                            <Input secureTextEntry={true} placeholder={I18n.t('email',{locale: 'bg'})} value={this.state.email} onChangeText = {(newValue) => this.setState({email:newValue})}/>
                        </Item>
                        <Item style={styles.inputContainer1}>
                            <Input secureTextEntry={true} placeholder={I18n.t('newEmail',{locale: 'bg'})} value={this.state.newEmail} onChangeText = {(newValue) => this.setState({newEmail:newValue})}/>
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