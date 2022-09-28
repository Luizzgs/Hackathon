import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%'
    },
    header: {
        height: '8%',
        backgroundColor: '#1D3557',
        flexDirection: 'row',  
        alignItems: 'center' 
     },
     titleHeader: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#D9D9D9', 
        marginLeft: '2%'
     },
     card: {
        maxWidth: '100%',
        height: '10%',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#E9E9E9',
        shadowOffset: {width: 1, height: 1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    },
    title: {
        fontWeight: "bold",
        color: '#1D3557'
    },
    description: {
        color: '#313131'
    },
});

export default styles