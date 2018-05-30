import React, {Component} from "react";
import {RefreshControl, ScrollView} from "react-native";
import I18n from '../../../i18n/i18n';
import Tabs from './tabs';
import Api from '../../../Api';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    H3,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Card,
    Body,
    List,
    CardItem
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";

import styles from "./styles";

class NetworkSettings extends Component {

    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="ios-menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{I18n.t('networkSettings', {locale: 'bg'})}</Title>
                    </Body>
                    <Right/>

                </Header>
                <Tabs/>
            </Container>

        );
    }
}

export default NetworkSettings;
