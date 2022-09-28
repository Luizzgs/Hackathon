import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import IconEt from 'react-native-vector-icons/Entypo';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

export default function Options({atualizaHome}) {
    const navigation = useNavigation(); 
    const [icon, setIcon] = useState('null');
    
    return (
        <View style={styles.options}>
            <TouchableOpacity style={styles.container} onPress={() => {setIcon('eventos'),  atualizaHome('eventos')} }>

                {   icon == 'eventos' ?
                    <IconEt name="modern-mic" size={30} color="#1d3357" style={styles.icon} />
                    :
                    <IconEt name="modern-mic" size={30} color="#fff" style={styles.icon} />
            
                }                               
                <Text style={styles.text}>Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => {setIcon('hoteis'), atualizaHome('hoteis')}}>
                {   icon == 'hoteis' ?
                    <IconFa name="bed" size={30} color="#1d3357" style={styles.icon} />
                    :
                    <IconFa name="bed" size={30} color="#fff" style={styles.icon} />
                }
                <Text style={styles.text}>Hoteis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => {setIcon('restaurantes'), atualizaHome('restaurantes')}}>
                {   icon == 'restaurantes' ?
                    <IconFa name="cutlery" size={30} color="#1d3357" style={styles.icon} />
                    :
                    <IconFa name="cutlery" size={30} color="#fff" style={styles.icon} />
                }
                <Text style={styles.text}>Restaurantes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => {setIcon('atracoes'), atualizaHome('atracoes')}}>
                {   icon == 'atracoes' ?
                    <IconMCI name="ferris-wheel" size={30} color="#1d3357" style={styles.icon} />
                    :
                    <IconMCI name="ferris-wheel" size={30} color="#fff" style={styles.icon} />
                }                
                <Text style={styles.text}>Atrações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => {setIcon('bares'), atualizaHome('bares')}}>
                {   icon == 'bares' ?
                    <IconIon name="beer" size={30} color="#1d3357" style={styles.icon} />
                    :
                    <IconIon name="beer-outline" size={30} color="#fff" style={styles.icon} />
                }
                <Text style={styles.text}>Bares</Text>
            </TouchableOpacity>
            
        </View>
    )
}