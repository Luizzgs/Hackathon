import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../contexts/auth';
import { StoreProvider, useStore } from '../../contexts/store';


export default function Profile() {
    const [, { logout }] = useAuth()
    
    const [store] = useStore();
    const [user] = [store.auth.user];


    return (
        <View style={styles.backgroud}>
            
            <Image source={require('../../assets/bandeirantes.jpg')} style={styles.capa} />  

            <View style={styles.container}>
             <Icon name="account-circle" size={100} color="#fff" style={styles.icon} />  
            
                <Text style={styles.text}>Nome: {user.name}  </Text>
                <Text style={styles.text}>Email: {user.email}</Text>
                <TouchableOpacity style={styles.SignUp} onPress={logout} >
                    <Text style={{fontSize: 18, color: '#fff'}} >Sair</Text>
                </TouchableOpacity>
            
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        flexDirection: 'column',
        height: '20%',
    },
    

    icon:{
        alignSelf: 'center',
        marginTop: 10,
    },
    capa: {
        width: '100%',
        height: '25%',
        //marginBottom: 20
    },



    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#1D3557'
    },
    text: {
        color: '#fff',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    SignUp: {
        marginTop: 50,
        backgroundColor: '#457b9d',
        width: 150,
        alignSelf: 'center',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


});
