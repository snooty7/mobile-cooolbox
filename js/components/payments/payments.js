import React, {Component} from "react";
import {Alert, RefreshControl, ScrollView} from "react-native";
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
    Form,
    Item,
    Input,
    List,
    CardItem
} from "native-base";
import { View, FlatList } from "react-native";
import {Grid, Row, Col} from "react-native-easy-grid";

import styles from "./styles";

class Payments extends Component {

    constructor(props){
        super(props);
        this.state={
            card_number:'',
            results: [],
            active: 1
        }
    }

    componentDidMount () {
        this.loadActvieBankCards()
    }

    changeState = (json) => {
        this.setState({
            results: json.results
        })
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadActvieBankCards = () => {
        console.log('loadActvieBankCards')
        Api.post({
            url:'bank_cards',
            success: this.changeState
        })
    }

    addCard = () => {
        let insertData = {
            card_number: this.state.email_,
            privilege: 1
        }

        Api.post({
            url:'bank_cards',
            data: insertData,
            success: this.insertSuccess
        })

    };

    insertSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert('Вие успешно добавихте банкова карта към вашия профил!');
        this.loadActvieBankCards();
        return true;

    };

    removeCard = (it) => {
        let deleteData = {
            active: 0,
            id_: it
        }

        Api.post({
            url:'bank_cards',
            data: deleteData,
            success: this.loadActvieBankCards()
        })
    }

    payBill = (em) => {
        let deleteData = {
            privilege: 0,
            id_: em
        }

        Api.post({
            url:'users',
            data: deleteData,
            success: this.loadActvieBankCards()
        })

    };

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
                                <Grid>
                                    <Row>
                                        <Text style={{marginLeft: 100, fontSize: 20}}>Плащане</Text>
                                    </Row>
                                    <Row>
                                        <Text style={{marginTop: 15, marginBottom: 15, fontSize: 18}}>
                                                При регистрация на нова банкова карта се удържа еднократна такса от ePay в размер на 1 лев за българска карта и 2 лева за международна. Кулбокс не таксува за регистрация и не съхранява картови данни.
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Form>
                                            <Item>
                                                <Input style={{width: 100, margin: 5}} placeholder={I18n.t('bank_card', {locale: 'bg'})} value={this.state.card_number} onChangeText = {(newValue) => this.setState({card_number:newValue})}/>
                                            </Item>
                                        </Form>
                                        <Button block style={styles.emailButton} onPress={() =>
                                            this.addCard()
                                        }>
                                            <Text>Добавяне</Text>
                                        </Button>
                                    </Row>
                                    <Row>
                                        <Text style={{marginLeft: 35, fontSize: 20}}>Регистрирани карти:</Text>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FlatList
                                                data={this.state.results}
                                                showsVerticalScrollIndicator={false}
                                                renderItem={({item}) =>
                                                    <Grid>
                                                        <Row>
                                                            <Col>
                                                                <Text id={item.id_} style={{fontSize: 18, marginLeft: 5,
                                                                    marginTop: 10}}>{item.email}</Text>
                                                            </Col>
                                                            <Col>
                                                                <Button transparent
                                                                        onPress={() => this.removeCard(item.id_)}
                                                                >
                                                                    <Icon name="ios-backspace"/>
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Grid>
                                                }
                                                keyExtractor={item => item.email}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Text style={{margin: 10, fontSize: 20, marginLeft: 100}}>Фактури:</Text>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FlatList
                                                data={this.state.results}
                                                showsVerticalScrollIndicator={false}
                                                renderItem={({item}) =>
                                                    <Grid>
                                                        <Row>
                                                            <Col>
                                                                <Text id={item.id_} style={{fontSize: 18, marginLeft: 5,
                                                                    marginTop: 10}}>{item.email}</Text>
                                                            </Col>
                                                            <Col>
                                                                <Button transparent
                                                                        onPress={() => this.payBill(item.id_)}
                                                                >
                                                                    <Icon name="ios-cash"/>
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Grid>
                                                }
                                                keyExtractor={item => item.email}
                                            />
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

export default Payments;
