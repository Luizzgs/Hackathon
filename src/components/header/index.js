import React from 'react';
import {View, TextInput, Image, SafeAreaView} from 'react-native';
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="cog-outline" color="#D9D9D9" size={30}/>
            </View>
            
            <View style={[styles.container, styles.containerInput]}>
                <TextInput 
                    style={styles.search} 
                    placeholder='Pesquise aqui'
                    placeholderTextColor='#D9D9D9' 
                />
            </View>
            
            <View style={styles.container}>
                <MaterialCommunityIcons name="magnify" color="#D9D9D9" size={30}/>
            </View>
        </SafeAreaView>
    )
}