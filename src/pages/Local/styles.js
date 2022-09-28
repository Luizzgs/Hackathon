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
       padding: -12      
    },
    button: {
        marginTop: 20,
        height: '100%',
        width: "100%",
        marginTop: 2,
        alignItems: 'center',
        flexDirection: 'row',      
    },
    text: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#D9D9D9'
    },
    icon: {
        marginLeft: 12,        
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
        borderBottomWidth: 1,        
        marginBottom: 5
    },    
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        width: '80%',
        alignContent: 'center',        
        fontWeight: 400,        
    },
    starContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    description: {
        width: '95%',
        marginTop: 10,        
    },    
    buttonCG: {
        backgroundColor: '#1D3557',
        width: '40%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 7,
        flexDirection: "row"
    },
    buttonCGText: {
        color: "#FFF",
        fontSize: 15,
    },
    contactContainer: {
        width: '80%',        
        flexDirection: 'row'
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',        
    },
    contactItem: {
        width: '28%',
        flexDirection: 'row',
        alignItems: 'center',        
        marginTop: '2%',
        marginLeft: '4%'
    },
    mapView: {
        marginTop: 3,
        width: '100%',
        height: '25%', 
        borderRadius: 2,
    },
    map: {        
        width: '100%',
        height: '100%',        
    },
    lineTopicos: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,        
        marginHorizontal: 20,
        marginVertical: 15
    }
});

export default styles