import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    options: {
        width: '100%',
        backgroundColor: '#457B9D',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
        //borderWidth: 1,
        //borderColor: '#D9D9D9',
    },
    image: {
        marginLeft: '5%'
    },
    text: {
        fontSize: 12,
        color: '#D9D9D9',
    },


})

export default styles