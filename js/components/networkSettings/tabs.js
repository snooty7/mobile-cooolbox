import { TabNavigator } from 'react-navigation';
import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card
} from "native-base";

import { View, Image} from "react-native";

import SwitchMode from './switchMode';
import ExternalNetwork from './externalNetwork';
import InternalNetwork from './internalNetwork';
import {Grid, Row, Col} from "react-native-easy-grid";

const avatar = require("../../../img/profile-login.png");



const Tabs = TabNavigator({
    SwitchMode: {
        screen: SwitchMode,
    },
    ExternalNetwork: {
        screen: ExternalNetwork,
    },
    InternalNetwork: {
        screen: InternalNetwork,
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