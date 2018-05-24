import React, {Component} from "react";
import {RefreshControl, ScrollView} from "react-native";
import I18n from '../../../i18n/i18n';
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
import { View } from "react-native";
import {Grid, Row, Col} from "react-native-easy-grid";

import styles from "./styles";

class Payments extends Component {

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
                    <Title>{I18n.t('Payments', {locale: 'bg'})}</Title>
                    </Body>
                    <Right/>

                </Header>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Фактури и плащания</Text>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <View>
                                        <Text>Фактура № </Text>
                                    </View>
                                </Row>
                                <Row>
                                    <View>
                                        <Button block style={styles.emailButton} onPress={() =>
                                            this.changePass()
                                        }>
                                            <Text>Плати</Text>
                                        </Button>
                                    </View>
                                </Row>

                            </Grid>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <View>
                                        <Text style={styles.texts_e}>Регистрирани банкови карти</Text>
                                    </View>
                                </Row>
                                <Row>
                                    <View>
                                        <Text style={styles.texts_e}>Няма регистрирани банкови карти</Text>
                                        <Button block style={styles.emailButton} onPress={() =>
                                            this.changePass()
                                        }>
                                            <Text>{I18n.t('add',{locale: 'bg'}).toUpperCase()}</Text>
                                        </Button>
                                    </View>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}

export default Payments;
