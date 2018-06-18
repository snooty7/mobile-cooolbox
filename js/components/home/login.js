import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import Anchor from './anchor';
import {View, TouchableHighlight, Modal} from "react-native";
import ForgotPass from "./forgotPass";
import Registration from "./registration";
import Notification from "../../components/push/notification";
import {Grid, Row, Col} from "react-native-easy-grid";
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
            pass:'',
            modalVisible: false,
            renderPass: false
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

            //Notification.sendToken(()=> this.props.navigation.navigate("MyAccount"));
            this.props.navigation.navigate("MyAccount");

    };

    _handlePressPass = () => {

        this.setState({
            modalVisible: true,
            renderPass: true
        })
    }
    _handlePressReg = () => {
        this.setState({
            modalVisible: true,
            renderPass: false
        })
    };

    getModalContent = () => {
        if(!this.state.renderPass){
            return <Registration/>
        }
        return <ForgotPass/>
    }

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

                <Grid>
                    <Row>
                        <Col>
                            <Button onPress={this._handlePressPass}>
                                <Text style={styles.forgotPass}> Забравена парола </Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button onPress={this._handlePressReg}>
                                <Text style={styles.registration}>   Регистрация </Text>
                            </Button>
                        </Col>
                    </Row>

                </Grid>
                <Button block style={styles.loginButton} onPress={() =>

                    this.login()
                    //this.props.navigation.navigate("MyAccount")
                }>
                    <Text>{I18n.t('login',{locale: 'bg'}).toUpperCase()}</Text>
                </Button>
                <Modal animationType="slide"
                       visible={this.state.modalVisible}
                       onRequestClose={()=>{
                           this.setState({
                               modalVisible:false
                           })
                       }}
                >
                {this.getModalContent()}
                </Modal>
            </View>
        );
    }
}

export default Login;
