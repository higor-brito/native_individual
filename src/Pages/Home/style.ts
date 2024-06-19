import {StyleSheet} from "react-native"

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        color: '#1b86ee'
    },

    TextInput: {
        backgroundColor: 'white',
        borderColor: '#1b86ee',
        borderWidth: 2,
        width: '90%',
        paddingLeft: 20,
        borderRadius: 10,
        height: 40,
        marginTop: 20,
    },

    button: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        width: '50%',
        color: 'white',
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 5,
        marginBottom: '49%',
    },

    image: {
        width: '73%',
        marginBottom: '15%',
    },

    imageButton: {
        paddingBottom:10
    }
})