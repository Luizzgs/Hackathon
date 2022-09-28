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
    
    sectionTitleView: {
        paddingTop: '1%',
        marginVertical: '2%',
        marginLeft: '2%'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D3557'
    },
    sectionLine: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 3,        
        marginVertical: 3
    },
    card: {
        width: '100%',
        flexDirection: 'row'
    },
    cardContent: {
        width: '80%',
        marginLeft: '2%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#313131'
    },
    cardSwitch: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,        
        marginVertical: 5,
        marginHorizontal: '2%'
    },
})
export default styles