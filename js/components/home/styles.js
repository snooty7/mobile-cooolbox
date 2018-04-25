const React = require("react-native");

const {StyleSheet, Dimensions, Platform} = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    loginContainer: {
        backgroundColor: 'rgb(191, 205, 49)'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    inputContainer: {
        backgroundColor:'#ffffff',
        marginRight:15
    },

    inputField: {
        flex:1,
        borderWidth: 0,
        fontSize:18,
        lineHeight: 24,
    },
    formContainer: {
        flex: 1,
        margin: 15,
        marginTop: deviceHeight / 4,
        marginBottom: 30
    },
    logo: {
        width:'100%',
        height: '100%'
    },

    loginButton:{
        margin: 15,
        marginTop: 35,
        backgroundColor: '#0080b4'
    },
    forgotPass: {
        margin: 15,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        color: '#0080b4'
    },
    registration: {
        margin: 15,
        paddingLeft: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        color: '#0080b4'
    },
    button: {
        flexDirection:'column'
    }
};
