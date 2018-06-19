import React, {Component} from "react";
import {
    Text,
    Icon,
    Content,
    Button,
    Form,
    Item,
    CardItem,
    ListItem,
    Input,
    Card,
} from "native-base";

import {View, Image, TouchableOpacity, Alert, FlatList} from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class switchMode extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-switch" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            disB: '',
            disA: '',
            mode: '',
            description:'',
            mac: '',
            active: 1
        }
    }
    componentDidMount () {
        this.loadData()
    }

    changeState = (json) => {
        this.setState({
            results: json.results,
            mode: json.results.mode
        })
        if(this.state.mode === 1){
            this.setState = ({
                disA: '#BFCD31',
                disB: '#b5b5b5'
            })
        }else {
            this.setState = ({
                disA: '#b5b5b5',
                disB: '#BFCD31'
            })
        }
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadData = () => {
        console.log('load restricted ip')
        Api.post({
            url:'restrict_ip',
            success: this.changeState
        })
    }

    removeRestriction = (it) => {
        let deleteData = {
            active: 0,
            id_: it
        }

        Api.post({
            url:'restrict_ip',
            data: deleteData,
            success: this.loadData()
        })
    }

    restrictIp = () => {
        let restrict = {
            description: this.state.description,
            mac: this.state.mac,
            active: 1
        }

        Api.post({
            url:'restrict_ip',
            data: restrict,
            success: this.restrictSuccess
        })
    }

    restrictSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert('Устройството с въведения от вас МAC адрес вече няма да достъпва вашата мрежа!');
        this.loadData();

    };

    changeRouter = () => {
        this.setState = ({
            disA: '#BFCD31',
            disB: '#b5b5b5'
        })
        let router = {
            mode: 1
        }
        Api.post({
            url:'restrict_ip',
            data: router,
            success: this.loadData()
        })
    }
    changeBridge = () => {
        this.setState = ({
            disA: '#b5b5b5',
            disB: '#BFCD31'
        })
        let bridge = {
            mode: 0
        }

        Api.post({
            url:'restrict_ip',
            data: bridge,
            success: this.loadData()
        })
    }

    render() {
        return (
            <Content padder>

                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 80, fontSize: 30}}>Избор на режим</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Col>
                                    <Button block style={{ color: this.state.disA }} onPress={() =>
                                        this.changeRouter()}>
                                        <Text>Router</Text>
                                    </Button>
                                </Col>
                                <Col style={{marginLeft: 10}}>
                                    <Button block style={{ color: this.state.disB }} onPress={() =>
                                        this.changeBridge()}>
                                        <Text>Bridge</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>Вие ползвате предоставеното от нас устройство в режим “Рутер / Router".</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>Ако желаете да го ползвате като преходно устройство, за да включите към него Ваши устройства и/или рутер с Wi-Fi, моля преминете към режим "Bridge mode".</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>Контрол на достъпа.</Text>
                            </Row>
                            <Form>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder={I18n.t('description', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.description} onChangeText = {(newValue) => this.setState({description:newValue})}/>
                                </Item>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder="MAC Address" ref={component5 => this._textInput5 = component5} value={this.state.ipAddress} onChangeText = {(newValue) => this.setState({ipAddress:newValue})}/>
                                </Item>
                            </Form>
                            <Button block style={{margin: 15}} onPress={() =>
                                this.restrictIp()
                            }>
                                <Text>{I18n.t('change',{locale: 'bg'}).toUpperCase()}</Text>
                            </Button>
                            <FlatList
                                data={this.state.results}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item}) =>
                                    <Grid>
                                        <Row>
                                            <Col>
                                                <Text id={item.MAC_address} style={{marginTop: 10, width: 140}}>{item.MAC_address}</Text>
                                            </Col>
                                            <Col>
                                                <Text id={item.description} style={{marginTop: 10, marginLeft: 35, width: 130}}>{item.description}</Text>
                                            </Col>
                                            <Col>
                                                <Button transparent style={{marginLeft: 25}}
                                                        onPress={() => this.removeRestriction(item.id_)}
                                                >
                                                    <Icon name="ios-trash"/>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Grid>
                                }
                                keyExtractor={item => item.mac}
                            />
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default switchMode;