import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import { View, TouchableHighlight } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import { Components } from 'expo';
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

class Tv extends Component {

    constructor(props) {
        super(props);
        this.onPressButton = this.onPressButton.bind(this);
    }
    onPressButton(){
        this.vid.presentFullscreenPlayer();
        this.vid.seek(5);
    }

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

                    <View style={styles.container}>
                        <TouchableHighlight onPress={this.onPressButton}>
                            <Text style={{color: 'yellow'}}>Full Screen</Text>
                        </TouchableHighlight>
                        <VideoPlayer
                            videoProps={{
                                shouldPlay: true,
                                resizeMode: Video.RESIZE_MODE_CONTAIN,
                                source: {
                                    uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                                },
                            }}
                            isPortrait={true}
                            playFromPositionMillis={0}
                        />
                    </View>

                </Container>

        );
    }
}

export default Tv;
