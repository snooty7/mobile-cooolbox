import React, {Component} from "react";
import {Alert, BackHandler, RefreshControl, ScrollView} from "react-native";
import I18n from '../../../i18n/i18n';
import Api from '../../../Api';
import {
    Container,
    Header,
    Title,
    Content,
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
    Form,
    Item,
    Input,
    CardItem
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import { Text, View, FlatList } from "react-native";

import styles from "./styles";
import Notification from "../push/notification";

class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            email_:'',
            results: [],
            privilege: 1
        }
    }

    componentDidMount () {
        this.loadDataUsers()
    }

    changeState = (json) => {
        this.setState({
            results: json.results
        })
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadDataUsers = () => {
        console.log('loadAddedUsers')
        Api.post({
            url:'users',
            success: this.changeState
        })
    }

    insertUser = () => {
        let insertData = {
            email_: this.state.email_,
            privilege: 1
        }

        Api.post({
            url:'users',
            data: insertData,
            success: this.insertSuccess
        })

    };

    insertSuccess = (response) => {
        if (response.status != 'error')
            Alert.alert('Вие успешно добавихте потребител към вашия профил!');
        return true;
    };

    deleteUser = (em) => {
        let deleteData = {
            privilege: 0,
            id_: em
        }

        Api.post({
            url:'users',
            data: deleteData,
            success: this.loadDataUsers()
        })

    };

    render() {
        return (
                <Container style={styles.container}>
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
                        <Title>{I18n.t('access', {locale: 'bg'})}</Title>
                        </Body>
                        <Right/>

                    </Header>
                    <Content padder>
                        <Card>
                            <CardItem header>
                                <Grid>
                                    <Row>
                                        <View>
                                            <Text style={{marginLeft: 15, fontSize: 20}}>Добави нов оторизиран представител:</Text>
                                        </View>
                                    </Row>
                                    <Row>
                                        <View>
                                            <Form>
                                                <Item>
                                                    <Input style={styles.inputBackground} placeholder={I18n.t('email', {locale: 'bg'})} value={this.state.email_} onChangeText = {(newValue) => this.setState({email_:newValue})}/>
                                                </Item>
                                            </Form>
                                            <Button block style={styles.emailButton} onPress={() =>
                                                this.insertUser()
                                            }>
                                                <Text>Потвърди</Text>
                                            </Button>
                                            <Text style={{marginTop: 15, marginBottom: 15, fontSize: 18}}>
                                                Внимание: Като собственик на този клиентски номер Вие можете да добавяте и премахвате оторизирани представители. Добавените потребители ще имат същите права като Вас, освен управление на достъпи.
                                            </Text>
                                        </View>
                                    </Row>
                                    <Row>
                                        <View>
                                            <Text style={{margin: 10, fontSize: 20}}>Оторизирани представители за вашия профил са:</Text>
                                        </View>
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
                                                                        onPress={() => this.deleteUser(item.id_)}
                                                                >
                                                                    <Icon name="ios-trash"/>
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

export default Users;
