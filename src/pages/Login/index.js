import React, { useState, useEffect, useContext } from 'react';
import {View, 
Text,   
TouchableOpacity, 
Animated,
KeyboardAvoidingView,
StatusBar,
Image,
Alert,
Keyboard,
ActivityIndicator } from 'react-native';
import Input from '../../components/Input';
import HideInput from '../../components/HideInput';
import UserService from '../../services/UserService';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';


export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hideout, setHideout] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [logo] = useState(new Animated.ValueXY({x: 250, y: 250}));
  const [imageMarge, setimageMarge] = useState(0);
  const [offSet] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [, { login }] = useAuth()
  

  useEffect (() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    
    Animated.spring(offSet.y, {
      toValue: 0,
      speed: 4,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  });

  async function handleLogin() {
    setLoading(true);
    if (email == null || password == null) {
      Alert.alert('', 'Preencha todos os campos!');
      setLoading(false);
    } else {
      UserService.signIn(email, password)
      .then((response) => {
        const { data } = response;
        login(data);
        setLoading(false);
      }
      ).catch((error) => {
        setLoading(false);
        console.log(error);
        Alert.alert("Erro", "Email ou senha incorretos");
      }
      )
    }
  }
  function keyboardDidShow(){
    setimageMarge(50);
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide(){
    setimageMarge(0);
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();

  }



  
  return (
  <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <StatusBar barStyle="light-content" backgroundColor="#1D3557" />

    <View style={styles.logo}>
        <Animated.Image style={{height: logo.y, width: logo.x, marginBottom: imageMarge}} source={require('../../assets/logo.png')} />      
    </View>
    
    <Animated.View style={[styles.container,{transform: [{translateY: offSet.y}]}]}>
      {/* Inputs de email e senha */}
      <Input icon="group" placeholder="Email" value={email} onChangeText={setEmail} />
      <HideInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={hideout} setHideout={setHideout} />
      
      {/* Botão Entrar */}
      <TouchableOpacity style = {styles.button}  onPress={() => handleLogin()}>
        {isLoading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>

      {/* Botão Criar conta */}
      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style = {styles.buttonConta}>
        <Text style= {styles.contaText}>Criar Conta</Text>
      </TouchableOpacity>
        
        </Animated.View>
        
  </KeyboardAvoidingView>
  );
}
