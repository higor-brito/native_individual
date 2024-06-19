import {StyleSheet} from "react-native"

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        alignItems: 'center',
        height: '30%',
        width: '70%',
        borderColor: '#1b86ee',
        borderWidth: 2,
        marginTop: '3%',
        borderRadius: 10,
        textAlign:'center'
    },
    imageCard: {
        width: '100%', 
        height: '100%', 
        position:'absolute', 
        borderRadius: 10
    },
    
    text: {
        color: 'black',
        fontWeight: 'bold',
        marginTop:10
    },
    navbar: {
        
        alignItems: 'center',
        justifyContent: 'center',
        height:'8%',
        width:'100%',
        backgroundColor: '#1b86ee',
        marginTop: '10%'
    },

    textI: {
        color: 'white',
        fontWeight: 'bold',
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'8%',
        width:'100%',
        backgroundColor: '#1b86ee',
        marginTop:'5%'
    }
})