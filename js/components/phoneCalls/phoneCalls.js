import React, {Component} from "react";
import {RefreshControl, ScrollView, View} from "react-native";
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
import {Grid, Row, Col} from "react-native-easy-grid";

import styles from "./styles";

class PhoneCalls extends Component {

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
                    <Title>{I18n.t('phoneCalls', {locale: 'bg'})}</Title>
                    </Body>
                    <Right/>

                </Header>
                <Content padder>

                    <Card>
                        <CardItem header>
                            <Text style={{fontSize: 30}}>Телефонни разговори</Text>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Icon name="ios-phone-portrait" />
                                    </Col>
                                    <Col>
                                        <Text style={styles.group}>Общо</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.group}>Остават</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={styles.group}>Безплатни минути</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>100</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>100</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={styles.group}>Кредитен лимит</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>30 лв.</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>30 лв.</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Text style={{fontSize: 20, marginTop: 15}}>Забележки:</Text>
                                </Row>
                                <Row>
                                    <Text style={{fontSize: 17, marginTop: 15, marginBottom: 15}}>1. Не се предоставя достъп до импулсни (например - 0900) телефони, както и до сателитни телефонни мрежи като Инмарсат и Иридиум.</Text>
                                </Row>
                                <Row>
                                    <Text style={{fontSize: 17}}>2. Посочената сума не включва абонаментни такси, както и такси за устройства.</Text>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>

            </Container>

        );
    }
}

export default PhoneCalls;
