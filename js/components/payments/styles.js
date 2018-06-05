const React = require("react-native");

const {StyleSheet} = React;

export default {
    balancePadding: {
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20,
        paddingBottom:20
    },

    balanceView: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    },

    headerItem: {
        height:50,
        paddingLeft:10
    },
    headerIconContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 30
    },
    headerIcon: {
        color:"#fff",
    },
    headerLabel: {
        marginLeft:7
    },
    headerButton: {
        height:30
    },

    infoContainer: {
        padding:10,
        borderColor: '#F5F5F5',
        borderWidth:1,
        height:'100%'
    },

    profileList: {
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        paddingTop:10,
        paddingBottom:10
    },

    listValue: {
        alignSelf: 'stretch',
        textAlign: 'right'
    },

    emailButton: {
        margin: 15,
        flex: 1,
        marginLeft: 45,
        marginRight: 15
    },

    inputBackground: {
        backgroundColor: '#e5e0e0',
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'stretch',
        textAlign: 'center'
    }

};
