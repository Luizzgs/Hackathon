import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Options({atualizaHome}) {
    const navigation = useNavigation(); 
    return (
        <View style={styles.options}>
            <TouchableOpacity style={styles.container} onPress={() => atualizaHome('eventos')}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/eventos.png')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => atualizaHome('hoteis')}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/hoteis.png')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Hoteis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => atualizaHome('restaurantes')}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/restaurantes.png')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Restaurantes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => atualizaHome('atracoes')}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/atracoes.png')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Atrações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => atualizaHome('bares')}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/bares.png')}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Bares</Text>
            </TouchableOpacity>
            
        </View>
    )
}