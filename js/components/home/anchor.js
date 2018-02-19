import React, { Component } from "react";
import { Linking, Text } from 'react-native';
import { Container} from "native-base";
import styles from "./styles";
import I18n from "../../../i18n/i18n";


class Anchor extends React.Component {
    _handlePress = () => {
        Linking.openURL(this.props.href);
        this.props.onPress && this.props.onPress();
    };

    render() {
        return (
            <Text {...this.props} onPress={this._handlePress}>
                {this.props.children}
            </Text>
        );
    }
}

export default Anchor;
