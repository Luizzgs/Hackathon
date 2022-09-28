import React from "react";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.background} >   
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D3557'
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20
    }
});
