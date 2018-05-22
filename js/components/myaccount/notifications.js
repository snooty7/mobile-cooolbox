import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card
} from "native-base";

import { View, Image} from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "./styles";


class Notifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: I18n.t('notifications', {locale: 'bg'})
    
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
        );
    }
}


export default Notifications;