import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Card({nome, endereco, logo, descricao, preco, email, site, telefone, whats, insta, face, latitude, longitude, indice}) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Local', {
                nome: nome.substring(1, nome.length-1),
                logo: logo.substring(1, logo.length-1),
                endereco: endereco.substring(1, endereco.length-1),
                descricao: descricao.substring(1, descricao.length-1),
                preco: preco == null || preco == 'null' ? null : preco.substring(1, preco.length-1),
                email: email == null || email == 'null' ? null : email.substring(1, email.length-1),
                site: site == null || site == 'null' ? null : site.substring(1, site.length-1),
                telefone: telefone == null || telefone == 'null' ? null : telefone.substring(1, telefone.length-1),
                whats: whats == null || whats == 'null' ? null : whats.substring(1, whats.length-1),
                insta: insta == null || insta == 'null' ? null : insta.substring(1, insta.length-1),
                face: face == null || face == 'null' ? null : face.substring(1, face.length-1),
                latitude: latitude.substring(1, latitude.length-1),
                longitude: longitude.substring(1, longitude.length-1),
                indice: indice
                })}>
            <View style={styles.cardContent}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: logo.substring(1, logo.length-1)}}></Image>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataName}>{nome.substring(1, nome.length-1)}</Text> 
                    <Text style={styles.dataAdress} numberOfLines={1}>{endereco.substring(1, endereco.length-1)}</Text> 
                </View>
            </View>
        </TouchableOpacity>
    )
}