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
import { Text, View } from "react-native";

import styles from "./styles";
import Notification from "../push/notification";

class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            email_:'',
            email:'',
            privilege: 1
        }
    }

    componentDidMount () {
        this.loadDataUsers()
    }

    confirmAddedUser = () => {
        Alert.alert(
            'Излизане от приложението',
            'Сигурни ли сте, че искате да излезете от приложението?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => BackHandler.exitApp()},
            ],
            {cancelable: false}
        )
        return true;
    }

    changeState = (json) => {
        console.log(json)
        this.setState({
            email:json.email
        })
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

            Alert.alert(
                'Добавяне на потребител',
                'Вие успешно добавихте потребител към вашия профил!',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('Ок Pressed')},
                ],
                {cancelable: false}
            )
        return true;

    };

    deleteUser = () => {
        let deleteData = {
            privilege: 0,
            email: this.state.email
        }

        Api.post({
            url:'users',
            data: deleteData,
            success: this.deleteSuccess
        })

    };

    deleteSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert(
                'Премахване на потребител',
                'Вие успешно премахнахте потребител от вашия профил!',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('Ок Pressed')},
                ],
                {cancelable: false}
            )
        return true;

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
                                            <Text style={{marginLeft: 15}}>Добави нов оторизиран представител:</Text>
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
                                            <Text style={{marginTop: 15, marginBottom: 15}}>
                                                Внимание: Като собственик на този клиентски номер Вие можете да добавяте и премахвате оторизирани представители. Добавените потребители ще имат същите права като Вас, освен управление на достъпи.
                                            </Text>
                                        </View>
                                    </Row>
                                    <Row>
                                        <View>
                                            <Text style={{marginTop: 15}}>Оторизирани представители за вашия профил са:</Text>
                                        </View>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={{marginLeft: 15, marginTop: 15, right: 0}}>{this.state.email}</Text>
                                        </Col>
                                        <Col>
                                                <Button transparent
                                                onPress={() => this.deleteUser()}
                                            >
                                                    <Icon name="ios-trash"/>
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

export default Users;
