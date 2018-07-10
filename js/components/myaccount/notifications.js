import React, {Component} from "react";
import {
    Container,
    Text,
    Icon,
    Content,
    Button,
    Card,
    CardItem,

} from "native-base";
import {View, Image, Animated, Alert, FlatList} from "react-native";
import { Notifications } from 'expo';
import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import styles from "./styles";
import Api from "../../../Api";

class ReceiveNotifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: I18n.t('notifications', {locale: 'bg'})
    
    };
    constructor(props){
        super(props);
        this.state={
            results: [],
            active: ''
        }
    }

    componentDidMount () {
        this.loadDataMessages()
    }

    changeState = (json) => {
        this.setState({
            results: json.results
        })
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadDataMessages = () => {
        console.log('loadAddedUsers')
        Api.post({
            url:'push_messages',
            success: this.changeState
        })
    }

    deleteMessage = (em) => {
        let deleteData = {
            active: 0,
            id_: em
        }

        Api.post({
            url:'push_messages',
            data: deleteData,
            success: this.loadDataMessages()
        })

    };

    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Grid>
                                <Row>
                                    <View>
                                        <Text style={{marginLeft: 15, fontSize: 20}}>Съобщения от Cooolbox:</Text>
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
                                                                marginTop: 10}}>{item.time}</Text>
                                                        </Col>
                                                        <Col>
                                                            <Text style={{fontSize: 18, marginLeft: 5,
                                                                marginTop: 10}}>{item.messages}</Text>
                                                        </Col>
                                                        <Col>
                                                            <Button transparent
                                                                    onPress={() => this.deleteMessage(item.id_)}
                                                            >
                                                                <Icon name="ios-trash"/>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            }
                                            keyExtractor={item => item.id_}
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


export default ReceiveNotifications;