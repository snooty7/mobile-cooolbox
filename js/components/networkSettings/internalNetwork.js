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

import {View, Image, FlatList, Alert} from "react-native";

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "../home/styles";
import Api from "../../../Api";
import Notification from "../push/notification";

class InternalNetwork extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        showLabel: false,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="md-options" size={10} color={tintColor} />,
        tabBarLabel: <View/>
    });

    constructor(props){
        super(props);
        this.state={
            publicPort: '',
            ipAddress: '',
            privatePort: '',
            networkName: '',
            pass: '',
            id_: '',
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
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadData = () => {
        console.log('load restricted ip')
        Api.post({
            url:'port_forward',
            success: this.changeState
        })
    }

    removePortForward = (it) => {
            let deleteData = {
                active: 0,
                id_: it
            }

            Api.post({
                url:'port_forward',
                data: deleteData,
                success: this.loadData()
            })
    }
    setNetwork = () => {
        let networkData = {
            networkName: this.state.networkName,
            pass: this.state.pass,
        }

        Api.post({
            url:'network_settings',
            data: networkData,
            success: this.networkSuccess
        })
    }

    networkSuccess = (response) => {
        if (response.status != 'error')

            Alert.alert('Вашата домашна мрежа е успешно настроена!');

    };

    render() {
        return (
            <Content padder>
                <Card>
                    <CardItem header>
                        <Text style={{marginLeft: 10, fontSize: 20, marginTop: 0}}>Пренасочване на порт</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <View style={{flex: 1}}>
                                <Form>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder='Public Port' ref={component5 => this._textInput5 = component5} value={this.state.publicPort} onChangeText = {(newValue) => this.setState({publicPort:newValue})}/>
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder={I18n.t('ipAddress', {locale: 'bg'})} ref={component5 => this._textInput5 = component5} value={this.state.ipAddress} onChangeText = {(newValue) => this.setState({ipAddress:newValue})}/>
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input placeholder='Private Port' ref={component5 => this._textInput5 = component5} value={this.state.privatePort} onChangeText = {(newValue) => this.setState({privatePort:newValue})}/>
                                    </Item>
                                    <Button block style={{margin: 15}} onPress={() =>
                                        this.portForward()
                                    }>
                                        <Text>ЗАПАЗИ</Text>
                                    </Button>
                                    <Row>
                                        <Col>
                                            <Text>Public port</Text>
                                        </Col>
                                        <Col>
                                            <Text>IP Address</Text>
                                        </Col>
                                        <Col>
                                            <Text>Private port</Text>
                                        </Col>
                                    </Row>
                                    <FlatList
                                        data={this.state.results}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({item}) =>
                                            <Grid>
                                                <Row>
                                                    <Col>
                                                        <Text id={item.public_port} style={{marginTop: 10, width: 140}}>{item.public_port}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text id={item.ip_address} style={{marginTop: 10, marginLeft: 35, width: 130}}>{item.ip_address}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text id={item.private_port} style={{marginTop: 10, marginLeft: 35, width: 130}}>{item.private_port}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Button transparent style={{marginLeft: 25}}
                                                                onPress={() => this.removePortForward(item.id_)}
                                                        >
                                                            <Icon name="ios-trash"/>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        }
                                        keyExtractor={item => item.mac}
                                    />
                                    <Text style={{fontSize: 20, marginBottom: 5, marginLeft: 10,}}>Задайте име на вашата мрежа</Text>

                                    <Item style={styles.inputContainer}>
                                        <Input placeholder="Мрежа" value={this.state.networkName} onChangeText = {(newValue) => this.setState({networkName:newValue})} />
                                    </Item>
                                    <Item style={styles.inputContainer}>
                                        <Input secureTextEntry={true} placeholder={I18n.t('pass',{locale: 'bg'})} value={this.state.pass} onChangeText = {(newValue) => this.setState({pass:newValue})} />
                                    </Item>
                                </Form>
                                <Button block style={{margin: 10}} onPress={() =>
                                    this.setNetwork()
                                }>
                                    <Text>ЗАПАЗИ</Text>
                                </Button>
                            </View>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default InternalNetwork;