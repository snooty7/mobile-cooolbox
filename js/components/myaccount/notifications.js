import React, {Component} from "react";
import {
    Container,
    Text,
    Icon,
    Content,
    Button,
    Card,
    CardItem, Header, Left, Body, Title, Right, Form, Item, Input,

} from "native-base";
import {View, Alert, FlatList} from "react-native";
import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import Api from "../../../Api";

class ReceiveNotifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: I18n.t('notifications', {locale: 'bg'})
    
    };
    constructor(props){
        super(props);
        this.state={
            messages: '',
            results: [],
            active: 1
        }
    }

    componentDidMount () {
        this.loadActvieMessages()
    }

    changeState = (json) => {
        this.setState({
            results: json.results
        })
        console.log(this.results);
        console.log(typeof(this.results));
    }

    loadActvieMessages = () => {
        console.log('loadActvieNotifications')
        Api.post({
            url:'push_messages',
            success: this.changeState
        })
    }

    removeMessage = (it) => {
        let deleteData = {
            active: 0,
            id_: it
        }

        Api.post({
            url:'push_messages',
            data: deleteData,
            success: this.loadActvieMessages()
        })
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Grid>
                                <Row>
                                    <Text style={{marginLeft: 35, fontSize: 20}}>Съобщения от Cooolbox:</Text>
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
                                                                marginTop: 10}}>{item.messages}</Text>
                                                        </Col>
                                                        <Col>
                                                            <Button transparent
                                                                    onPress={() => this.removeMessage(item.id_)}
                                                            >
                                                                <Icon name="ios-backspace"/>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            }
                                            keyExtractor={item => item.messages}
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