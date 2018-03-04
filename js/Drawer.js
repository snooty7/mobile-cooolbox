import React from "react";
import {DrawerNavigator} from "react-navigation";

import MyAccount from "./components/myaccount/";
import Users from "./components/users/";
import Payments from "./components/payments/payments";
import Additional from "./components/additional/additional";
import NetworkSettings from "./components/networkSettings/networkSettings";
import PhoneCalls from "./components/phoneCalls/phoneCalls";
import SideBar from "./components/sidebar";


const Drawer = DrawerNavigator(
    {
        MyAccount: {screen: MyAccount},
        Users: {screen: Users},
        Payments: {screen: Payments},
        Additional: {screen: Additional},
        NetworkSettings: {screen: NetworkSettings},
        PhoneCalls: {screen: PhoneCalls}

    },
    {
        initialRouteName: "MyAccount",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

export default Drawer;
