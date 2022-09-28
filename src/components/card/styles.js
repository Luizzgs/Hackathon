import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        maxWidth: '100%',
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
    },

    cardContent: {
        width: '75%',
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 18,
        marginVertical: 10
    },

    imageContainer: {
        width: '20%',
        marginRight: 10,
    },

    image: {
        height: 50,
        width: 50,
        borderRadius: 30
    },

    dataContainer: {
        width: '100%',
        flexDirection: "column",
        alignContent:"space-around"
    },

    dataName: {
        fontWeight: "bold"
    },

    dataAdress: {
        maxWidth: '100%'
    },
});

export default styles