import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1D3557',     
    },
    container:{
        flex: 1,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1D3557',
        marginBottom: 80,
    },
    containerLogo:{
        marginBottom: 20,
        alignItems: 'center',
    },

    button: {
        marginTop: 20,
        height: 50,
        width: "20%",
        marginTop: 2,
        justifyContent: 'center',
    },
    

    buttonCadastro: {
        marginTop: 10,
        backgroundColor: '#a8dadc',
        width: 150,
        alignSelf: 'center',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Cadastrar: {
        color: 'black',
        fontSize: 17,
        
    },
});


export default styles;