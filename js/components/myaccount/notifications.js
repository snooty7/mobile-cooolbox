import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card,
    CardItem,

} from "native-base";
import { View, Image, Animated} from "react-native";
import { Notifications } from 'expo';
import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "./styles";
import Api from "../../../Api";
import PushNotification from "../push/notification";

class ReceiveNotifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: I18n.t('notifications', {locale: 'bg'})
    
    };

    constructor(props){
        super(props)
        this.state = {
            name:'',
            clientNumber:'',
            service:'',
            address:'',
            refreshing:false,
            notification: {}
        }
        console.log('constructor')
    }

    componentDidMount() {
        PushNotification();
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = (notification) => {
        this.setState({notification: notification});
    }

    changeState = (json) => {
        console.log(json)
        this.setState({
            name:json.name,
            clientNumber:json.clientNumber,
            service:json.service,
            address:json.address,
            refreshing:false
        })
    }

    loadData = () => {
        console.log('loadDataProfile')
        Api.post({
            url:'average',
            success: this.changeState
        })
    }

    render() {
        return (
            <Content padder>
                <Card>
                    <CardItem header>
                        <Text>Съобщения от Cooolbox</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <View>
                                    <Text>Origin: {this.state.notification.origin}</Text>
                                </View>
                            </Row>
                            <Row>
                                <View>
                                    <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
                                </View>
                            </Row>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default ReceiveNotifications;