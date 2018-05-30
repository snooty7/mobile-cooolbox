import React, {Component} from "react";
import {
    Text,
    Icon,
    Content,
    Button,
    Form,
    Item,
    CardItem,
    ListItem,
    Input,
    Card
} from "native-base";

import { View, Image, TouchableOpacity} from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class switchMode extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-switch" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

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
            <Content padder>

                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 80, fontSize: 30}}>Избор на режим</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Col>
                                    <Button block onPress={() =>
                                        this.changePass()}>
                                        <Text>Router</Text>
                                    </Button>
                                </Col>
                                <Col style={{marginLeft: 10}}>
                                    <Button disabled block>
                                        <Text>Bridge</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Text style={{margin: 15, fontSize: 20}}>Вие ползвате предоставеното от нас устройство в режим “Рутер / Router".</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 15, fontSize: 20}}>Ако желаете да го ползвате като преходно устройство, за да включите към него Ваши устройства и/или рутер с Wi-Fi, моля преминете към режим "Bridge mode".</Text>
                            </Row>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default switchMode;