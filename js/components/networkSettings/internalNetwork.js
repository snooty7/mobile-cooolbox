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
                        <Text style={{marginLeft: 20, fontSize: 20}}>Пренасочване на порт</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
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
                            </Form>
                            <Button block style={{margin: 15}} onPress={() =>
                                this.restrictIp()
                            }>
                                <Text>ЗАПАЗИ</Text>
                            </Button>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default InternalNetwork;