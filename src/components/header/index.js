import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.header}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Config')}>
                <MaterialCommunityIcons name="cog-outline" color="#D9D9D9" size={30}/>
            </TouchableOpacity>
            
            <View style={styles.containerTitle}>
                <Text style={{fontWeight: 'bold', color: '#D9D9D9', fontSize: 20}}>CONHECENDO BAND</Text>
            </View>
            
            <View style={styles.container}>
                <MaterialCommunityIcons name="magnify" color="#D9D9D9" size={30}/>
            </View>
        </SafeAreaView>
    )
}