import { TabNavigator } from 'react-navigation';
import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card
} from "native-base";

import { View, Image} from "react-native";

import Profile from './profile';
import Statistics from './settings';
import Notifications from './notifications';
import {Grid, Row, Col} from "react-native-easy-grid";

const avatar = require("../../../img/profile-login.png");



const Tabs = TabNavigator({
    Profile: {
        screen: Profile,
    },
    Settings: {
        screen: Statistics,
    },
    Notifications: {
        screen: Notifications,
    },
},
    {
    tabBarPosition: 'top',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: 'white',
        style: {
            backgroundColor: '#BFCD31',
        },
        indicatorStyle: {
            backgroundColor: '#BFCD31'
        },
    }

});
export default Tabs;