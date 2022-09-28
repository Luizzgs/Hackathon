import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import { useStore } from '../../contexts/store';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Notification() {

    const [count, setCount] = useState(0)
    const [store] = useStore();
    const [user] = [store.auth.user];

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <MaterialCommunityIcons style={{ marginLeft: '2%'}} name="bell" color={'#D9D9D9'} size={25} />
                <Text style={styles.titleHeader}>Notificações</Text>
            </View>  

            <View style={styles.card}>
                <Text style={styles.title}>BEM-VINDO, {user.name}!</Text> 
                <Text style={styles.description}>Obrigado por cadastrar no nosso aplicativo, para visualizar nossos pontos de turismo, vá para a aba Home.</Text> 
            </View>
        </View>
    )
}