import { TabNavigator } from 'react-navigation';
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
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Profile extends React.Component {


    static navigationOptions = {
        tabBarLabel: I18n.t('profile', {locale: 'bg'})
    };


    render() {
        return (

        <Content padder>

            <Card>
                <CardItem header>
                    <Text>Profile Screen</Text>
                </CardItem>
                <CardItem>
                        <Grid>
                            <Row>
                                <Col>
                                    <Content padder>
                                        <Text>Profile Screen</Text>
                                    </Content>
                                </Col>
                                <Col>
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.listLabel}>Name:</Text>
                                        <Text style={styles.name}>Ivan Petrov</Text>
                                    </View>
                                </Col>
                            </Row>
                            <Row style={styles.profileList}>
                                <Col size={1}>
                                    <Text style={styles.listLabel}>email:</Text>
                                </Col>
                                <Col size={2}>
                                    <Text style={styles.listValue}>ivan.petrov@abv.bg</Text>
                                </Col>
                            </Row>
                            <Row style={styles.profileList}>
                                <Col size={1}>
                                    <Text style={styles.listLabel}>skype:</Text>
                                </Col>
                                <Col size={2}>
                                    <Text style={styles.listValue}>ivanpetrovbg</Text>
                                </Col>
                            </Row>
                            <Row style={styles.profileList}>
                                <Col size={1}>
                                    <Text style={styles.listLabel}>phone:</Text>
                                </Col>
                                <Col size={2}>
                                    <Text style={styles.listValue}>0884 221 213</Text>
                                </Col>
                            </Row>
                        </Grid>
                </CardItem>


            </Card>


        </Content>

        );
    }
}


export default Profile;