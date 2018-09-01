import React, { Component } from "react";
import { Linking, Text } from 'react-native';
import { Container} from "native-base";


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
