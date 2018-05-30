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

class Additional extends Component {

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
                    <Body style={{flex: 3}}>
                    <Title>{I18n.t('additional', {locale: 'bg'})}</Title>
                    </Body>
                    <Right/>

                </Header>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Допълнителен ТВ пакет</Text>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 15, right: 0}}>Услуга</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 15, right: 0}}>Месечна Такса</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 15, right: 0}}>Статус</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 15, right: 0}}>Действие</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>HBO</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>9.00 лв.</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>Активна</Text>
                                    </Col>
                                    <Col>
                                        <Button transparent style={{marginLeft: 15, marginTop: 4, right: 0}}
                                                onPress={() => this.checkAdditional()}
                                        >
                                            <Text>Спри</Text>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>Diema Extra</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>5.99 лв.</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>Активна</Text>
                                    </Col>
                                    <Col>
                                        <Button transparent style={{marginLeft: 15, marginTop: 4, right: 0}}
                                                onPress={() => this.checkAdditional()}
                                        >
                                            <Text>Спри</Text>
                                        </Button>
                                    </Col>
                                </Row>

                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}

export default Additional;
