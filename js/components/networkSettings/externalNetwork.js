import React, {Component} from "react";
import {
    Text,
    Icon,
    Content,
    Button,
    Form,
    Item,
    Input,
    Card,
    CardItem
} from "native-base";

import {View, Image, Alert, FlatList} from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class ExternalNetwork extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-wifi" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            ipAddress:'',
            mac: '',
            active: 1,
            ip_address: ''
        }
    }
    componentDidMount () {
        this.loadData()
    }

    changeState = (json) => {
        this.setState({
            results: json.results
        })
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadData = () => {
        console.log('load Actvie Dhcp Reservations')
        Api.post({
            url:'dhcp_reservation',
            success: this.changeState
        })
    }

    removeDhcp = (it) => {
        let deleteData = {
            active: 0,
            id_: it
        }

        Api.post({
            url:'dhcp_reservation',
            data: deleteData,
            success: this.loadData()
        })
    }

    dhcpReserve = () => {
        let dhcp = {
            ipAddress: this.state.ipAddress,
            mac: this.state.mac,
            active: 1
        }

        Api.post({
            url:'dhcp_reservation',
            data: dhcp,
            success: this.dhcpSuccess
        })
    }

    dhcpSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert('Вие направихте успешна резервация на IP Адрес!');
            this.loadData();

    };

    render() {
        return (
            <Content padder>
                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 80, fontSize: 30}}>DHCP настройки</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>Рутер IP: 192.168.1.1</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 15}}>DHCP обхват: от 192.168.1.100 до 192.168.1.200</Text>
                            </Row>
                            <Row>
                                <Text style={{margin: 5, fontSize: 20, marginLeft: 15}}>DHCP резервации</Text>
                            </Row>
                            <Form>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder="MAC Address" ref={component5 => this._textInput5 = component5} value={this.state.mac} onChangeText = {(newValue) => this.setState({mac:newValue})}/>
                                </Item>
                                <Item style={styles.inputContainer}>
                                    <Input placeholder={I18n.t('ipAddress', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.ipAddress} onChangeText = {(newValue) => this.setState({ipAddress:newValue})}/>
                                </Item>
                            </Form>
                            <Button block style={{margin: 15}} onPress={() =>
                                this.dhcpReserve()
                            }>
                                <Text>ЗАПАЗИ</Text>
                            </Button>
                            <Row>
                                <Text>Запазени ip адреси:</Text>
                            </Row>
                            <FlatList
                                data={this.state.results}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item}) =>
                                    <Grid>
                                        <Row>
                                            <Col>
                                                <Text id={item.mac} style={{marginTop: 10, width: 140}}>{item.mac}</Text>
                                            </Col>
                                            <Col>
                                                <Text id={item.ip_address} style={{marginTop: 10, marginLeft: 35, width: 130}}>{item.ip_address}</Text>
                                            </Col>
                                            <Col>
                                                <Button transparent style={{marginLeft: 25}}
                                                        onPress={() => this.removeDhcp(item.id_)}
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


export default ExternalNetwork;