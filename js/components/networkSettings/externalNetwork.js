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

class ExternalNetwork extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-wifi" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
            newPass: '',
            mac: '',
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
            <Content padder>
                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 80, fontSize: 30}}>DHCP настройки</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>Рутер IP: 192.168.1.1</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>DHCP обхват: от 192.168.1.100 до 192.168.1.200</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>DHCP резервации</Text>
                            </Row>
                            <Form>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder={I18n.t('description', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.description} onChangeText = {(newValue) => this.setState({description:newValue})}/>
                                </Item>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder="MAC Address" ref={component5 => this._textInput5 = component5} value={this.state.mac} onChangeText = {(newValue) => this.setState({mac:newValue})}/>
                                </Item>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder={I18n.t('ipAddress', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.ipAddress} onChangeText = {(newValue) => this.setState({ipAddress:newValue})}/>
                                </Item>
                            </Form>
                            <Button block style={{margin: 15}} onPress={() =>
                                this.restrictIp()
                            }>
                                <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                            </Button>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default ExternalNetwork;