import React, {Component} from "react";
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

class Additional extends Component {

    constructor(props){
        super(props)
        this.state = {
            checkHbo: '',
            checkDiema: '',
            HBO: '',
            HBO_mode: '',
            DIEMA_mode: '',
            DIEMA: ''

        }
        console.log('constructor')
    }

    componentDidMount () {
        this.loadData()
    }

    changeState = (json) => {
        console.log(json)
        this.setState({
            HBO:json.HBO,
            DIEMA:json.DIEMA,
            checkHbo: json.HBO_mode,
            checkDiema: json.DIEMA_mode
        })
    }

    loadData = () => {
        console.log('loadDataAdditional')
        Api.post({
            url:'additional',
            success: this.changeState
        })
    }

    checkAdditionalHbo = () => {
        if (this.state.HBO === 'Активна') {
            this.setState({
                HBO: 'Спри',
                checkHbo: 'ПУСНИ'
            })
        }else {
            this.setState({
                HBO: 'Активна',
                checkHbo: 'СПРИ'
            })
        }
        console.log(this.state.HBO);
        let HBOData = {
            HBO: this.state.HBO,
        }
        Api.post({
            url:'additional',
            data: HBOData
        })
    }

    checkAdditionalDiema = () => {
        if (this.state.DIEMA === 'Активна') {
            this.setState({
                DIEMA: 'Спряна',
                checkDiema: 'ПУСНИ'
            })
        }else {
            this.setState({
                DIEMA: 'Активна',
                checkDiema: 'ПУСНИ'
            })
        }

        let DIEMAData = {
            DIEMA: this.state.DIEMA,
        }
        Api.post({
            url:'additional',
            data: DIEMAData,
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
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>{this.state.HBO}</Text>
                                    </Col>
                                    <Col>
                                        <Button transparent style={{marginLeft: 15, marginTop: 4, right: 0}}
                                                onPress={() => this.checkAdditionalHbo()}
                                        >
                                            <Text style={{width: 50}}>{this.state.checkHbo}</Text>
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
                                        <Text style={{marginLeft: 15, marginTop: 14, right: 0}}>{this.state.DIEMA}</Text>
                                    </Col>
                                    <Col>
                                        <Button transparent style={{marginLeft: 15, marginTop: 4, right: 0}}
                                                onPress={() => this.checkAdditionalDiema()}
                                        >
                                            <Text style={{width: 50}}>{this.state.checkDiema}</Text>
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
