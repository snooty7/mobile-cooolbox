const React = require("react-native");

const {StyleSheet, Dimensions, Platform} = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    loginContainer: {
        backgroundColor: 'rgb(191, 205, 49)'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: deviceHeight / 8,
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
        marginTop: 15,
        fontSize: 18,
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        color: '#0080b4'
    },
    registration: {
        marginTop: 15,
        marginLeft: 15,
        paddingLeft: 15,
        fontSize: 18,
        width: '50%',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        color: '#0080b4'
    }
};
