import React, {Component} from "react";
import {Alert, BackHandler, RefreshControl, ScrollView, View} from "react-native";
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

    constructor(props){
        super(props)
        this.state = {
            sum_m:'',
            remain_m:'',
            sum_k:'',
            remain_k:''
        }
    }

    componentDidMount () {
        this.loadData()
    }

    changeState = (json) => {
        console.log(json)
        this.setState({
            sum_m:json.sum_m,
            remain_m:json.remain_m,
            sum_k:json.sum_k,
            remain_k:json.remain_k,
        })
    }

    loadData = () => {
        console.log('loadDataPhoneCalls')
        Api.post({
            url:'phonecalls',
            success: this.changeState
        })
    }

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
                                        <Text style={styles.col}>{this.state.sum_m}</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>{this.state.remain_m}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={styles.group}>Кредитен лимит</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>{this.state.sum_k} лв.</Text>
                                    </Col>
                                    <Col>
                                        <Text style={styles.col}>{this.state.remain_k} лв.</Text>
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
