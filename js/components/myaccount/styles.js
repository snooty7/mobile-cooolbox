const React = require("react-native");
const {StyleSheet, Dimensions, Platform} = React;
const deviceHeight = Dimensions.get("window").height;

export default {

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

    listLabel: {
        color:'#666'
    },

    name: {
        fontSize: 20,
        color:'#000'
    },

    listValue: {
        alignSelf: 'stretch',
        textAlign: 'right'
    },

    emailButton: {
        color: '#bfcd31',
        margin: 15,
        fontSize: 20,
        marginLeft: 15,
        marginRight: 15
    },

    texts_e: {
        fontSize: 20,
        margin: 15
    },

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
        marginTop: deviceHeight / 2,
        marginBottom: 30
    }
};
