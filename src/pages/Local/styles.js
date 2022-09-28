import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '200%'
    },
    header: {
       height: '8%',
       backgroundColor: '#1D3557',
       flexDirection: 'row',
       
    },
    button: {
        marginTop: 20,
        height: '100%',
        width: "20%",
        marginTop: 2,
        justifyContent: 'center',
    },
    text: {
        justifyContent: 'center', 
    },
    icon: {
        marginLeft: 10,
    },
    imageContainer: {
        height: '22%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    line: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 2,
        margin: '1%'
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        width: '80%',
        alignContent: 'center',
        marginLeft: '2%',
    },
    starContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    description: {
        width: '95%',
        marginTop: 10,
        marginLeft: '2%',
    },
    price: {
        marginTop: 10,
        marginLeft: '2%',
    },
    contactContainer: {
        width: '80%',
        marginLeft: '2%',
        flexDirection: 'row'
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    contactItem: {
        width: '28%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4%',
        marginTop: '2%'
    },
    map: {
        marginTop: '2%',
        width: '100%',
        height: '30%'
    },
});

export default styles