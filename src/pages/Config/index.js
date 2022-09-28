import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Config() {
    const navigation = useNavigation()
    const [isEnabledNotifications, setEnabledNotifications] = useState(true)
    const [isEnabledLocalization, setEnabledLocalization] = useState(false)
    const [isEnabledLogin, setEnabledLogin] = useState(true)
    const changeSwitchNotifications = () => {
        setEnabledNotifications(prevState => !prevState)
    }

    const changeSwitchLocalization = () => {
        setEnabledLocalization(prevState => !prevState)
    }

    const changeSwitchLogin = () => {
        setEnabledLogin(prevState => !prevState)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Icon style={styles.icon} name="arrow-back-ios" size={25} color="#D9D9D9" />
                    <Text style={styles.text}>CONFIGURAÇÕES</Text>
                </TouchableOpacity>
            </View>   

            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitle}>PERMISSÕES</Text>
            </View>

            <View style={styles.sectionLine}/>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>Notificações</Text> 
                    <Text style={styles.description}>Notificações do aplicativo</Text> 
                </View>
                <View style={styles.cardSwitch}>
                    <Switch
                        trackColor={{false: '#A8DADC', true: '#457B9D'}}
                        thumbColor={!isEnabledNotifications ? '#FFF' : '#FFF'}
                        onValueChange={changeSwitchNotifications}
                        value={isEnabledNotifications}    
                    ></Switch>
                </View>
            </View>

            <View style={styles.line}/>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>Localização</Text> 
                </View>
                <View style={styles.cardSwitch}>
                    <Switch
                        trackColor={{false: '#A8DADC', true: '#457B9D'}}
                        thumbColor={!isEnabledLocalization ? '#FFF' : '#FFF'}
                        onValueChange={changeSwitchLocalization}
                        value={isEnabledLocalization}    
                    ></Switch>
                </View>
            </View>


            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitle}>SEGURANÇA</Text>
            </View>

            <View style={styles.sectionLine}/>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>Conta</Text> 
                    <Text style={styles.description}>Mudar email, mudar senha</Text> 
                </View>

            </View>

            <View style={styles.line}/>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>Login automático</Text> 
                    <Text style={styles.description}>Se ativo, não solicitará o login para entrar novamente no aplicativo</Text> 
                </View>
                <View style={styles.cardSwitch}>
                    <Switch
                        trackColor={{false: '#A8DADC', true: '#457B9D'}}
                        thumbColor={!isEnabledLogin ? '#FFF' : '#FFF'}
                        onValueChange={changeSwitchLogin}
                        value={isEnabledLogin}    
                    ></Switch>
                </View>
            </View>

        </View>
    )
}