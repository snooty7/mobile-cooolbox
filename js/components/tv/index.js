import React, {Component} from "react";
import { WebView } from 'react-native';
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

class TvChannels extends Component {

    render() {
        return (
             <WebView source={{uri:'http://randomgames.eu/tv/tv.html'}}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      startInLoadingState={true}
                      allowsInlineMediaPlayback={true}
                      mediaPlaybackRequiresUserAction={true}
             />
        );
    }
}

export default TvChannels;
