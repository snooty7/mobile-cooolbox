import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import { Container} from "native-base";
import Login from "./login";
import styles from "./styles";
import I18n from "../../../i18n/i18n";


const logo = require("../../../img/coool.jpg");


class Home extends Component {

    componentDidMount() {
        I18n.locale = 'bg';
    }

	render() {

		return (
			<Container style={styles.loginContainer}>
				<StatusBar barStyle="light-content" />
				<View style={styles.imageContainer}>
					<Image source={logo} resizeMode="contain" style={styles.logo}></Image>
				</View>
					<Login navigation={this.props.navigation}></Login>
			</Container>
		);
	}
}

export default Home;
