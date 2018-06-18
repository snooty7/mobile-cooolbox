import React, {Component} from "react";
import {
    Text,
    Icon,
    Content,
    Button,
    Form,
    Item,
    Input,
    Card,
    CardItem
} from "native-base";

import { View, Image, } from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class InternalNetwork extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-options" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            publicPort: '',
            ipAddress: '',
            privatePort: ''
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
            <Content padder>
                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 10, fontSize: 20, marginTop: 0}}>Пренасочване на порт</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <View style={{flex: 1}}>
                                <Form>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder='Public Port' ref={component5 => this._textInput5 = component5} value={this.state.publicPort} onChangeText = {(newValue) => this.setState({publicPort:newValue})}/>
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder={I18n.t('ipAddress', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.ipAddress} onChangeText = {(newValue) => this.setState({ipAddress:newValue})}/>
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder='Private Port' ref={component5 => this._textInput5 = component5} value={this.state.privatePort} onChangeText = {(newValue) => this.setState({privatePort:newValue})}/>
                                    </Item>
                                    <Button block style={{margin: 15}} onPress={() =>
                                        this.restrictIp()
                                    }>
                                        <Text>ЗАПАЗИ</Text>
                                    </Button>
                                    <Text style={{fontSize: 20, marginBottom: 5, marginLeft: 10,}}>Задайте име на вашата мрежа</Text>

                                    <Item style={styles.inputContainer}>
                                        <Input placeholder="Мрежа" ref={component2 => this._textInput2 = component2} value={this.state.pass2} onChangeText = {(newValue) => this.setState({pass2:newValue})} />
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input secureTextEntry={true} placeholder={I18n.t('pass',{locale: 'bg'})} ref={component1 => this._textInput1 = component1} value={this.state.email} onChangeText = {(newValue) => this.setState({email:newValue})} />
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input secureTextEntry={true} placeholder="Потвърди парола" ref={component => this._textInput = component} value={this.state.newEmail} onChangeText = {(newValue) => this.setState({newEmail:newValue})} />
                                    </Item>
                                </Form>
                                <Button block style={{margin: 10}} onPress={() =>
                                    this.changeEmail()
                                }>
                                    <Text>ЗАПАЗИ</Text>
                                </Button>
                            </View>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default InternalNetwork;