import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import { View, TouchableHighlight } from 'react-native';
import { Video } from 'expo';
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
import styles from "./styles";

class TvChannels extends Component {

    render() {
        return (
             <WebView source={{uri:'http://randomgames.eu/tv/tv.html'}}
                      style={{margin: 20}}
                      javaScriptEnabled={true}
                      scalesPageToFit
                      startInLoadingState
                      allowsInlineMediaPlayback={true}
             />
        );
    }
}

export default TvChannels;
