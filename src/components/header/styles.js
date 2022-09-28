import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    header: {
        //marginTop: 30,
        width: '100%',
        height: '8%',
        backgroundColor: '#1D3557',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    container: {
        width: '10%',
        alignItems: 'center'
    },
    containerInput: {
        alignItems: "center",
        width: '80%',
    },
    search: {
        width: '80%',
        minHeight: 30,
        color: '#D9D9D9',
        borderWidth: 1.5,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 10
    }
})

export default styles