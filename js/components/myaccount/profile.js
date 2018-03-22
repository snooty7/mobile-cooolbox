import { TabNavigator } from 'react-navigation';
import {RefreshControl, ScrollView} from "react-native";
import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card,
    CardItem,
    Body,
    List,
    ListItem,
    Right
} from "native-base";

import { View, Image} from "react-native";
import ScaledImage from "../../../common/scaledimage";

import styles from './styles';

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import Api from "../../../Api";
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            clientNumber:'',
            service:'',
            address:'',
            refreshing:false
        }
        console.log('constructor')
    }

    componentDidMount () {
        this.loadData()
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

    static navigationOptions = {
        tabBarLabel: I18n.t('profile', {locale: 'bg'})
    };

    render() {
        return (
                <Content padder>

                    <Card>
                        <CardItem header>
                            <Text>Клиент</Text>
                        </CardItem>
                        <CardItem>
                                <Grid>
                                    <Row>
                                        <View>
                                            <Text style={styles.listLabel}>Име:</Text>
                                            <Text style={styles.name}>{this.state.name}</Text>
                                        </View>
                                    </Row>
                                    <Row style={styles.profileList}>
                                        <Col size={1}>
                                            <Text style={styles.listLabel}>Клиентски номер:</Text>
                                        </Col>
                                        <Col size={2}>
                                            <Text style={styles.listValue}>{this.state.clientNumber}</Text>
                                        </Col>
                                    </Row>
                                    <Row style={styles.profileList}>
                                        <Col size={1}>
                                            <Text style={styles.listLabel}>Услуга:</Text>
                                        </Col>
                                        <Col size={2}>
                                            <Text style={styles.listValue}>{this.state.service}</Text>
                                        </Col>
                                    </Row>
                                    <Row style={styles.profileList}>
                                        <Col size={1}>
                                            <Text style={styles.listLabel}>Адрес:</Text>
                                        </Col>
                                        <Col size={2}>
                                            <Text style={styles.listValue}>{this.state.address}</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                        </CardItem>

                    </Card>

                </Content>
        )
    }
}
export default Profile;