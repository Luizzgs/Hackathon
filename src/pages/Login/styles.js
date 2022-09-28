import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1D3557',
    },
    
    logo:{
      flex: 1,
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 20,
    },

    container:{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      width: '90%',
    },
     
    button:{
      backgroundColor: '#a8dadc',
      width: '60%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 7
    },

    buttonConta:{
      alignSelf: 'center', 
      padding: 10,
    }, 

    contaText:{
      color: "#FFF",
      fontSize: 15,
    },

    TextEntrar:{
      fontSize: 15,
      color: '#000',
    }  
  });

  export default styles;