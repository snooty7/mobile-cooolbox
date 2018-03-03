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


class Notifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: I18n.t('notifications', {locale: 'bg'})
    
    };

    render() {
        return (
            <Content padder>
                <Text>Notifications</Text>
            </Content>
        );
    }
}


export default Notifications;