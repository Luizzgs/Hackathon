import React, {useState, useEffect} from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet,
StatusBar,
Text, 
View,
TextInput, 
KeyboardAvoidingView, 
Image, 
TouchableOpacity,
Animated,
Alert, 
Keyboard,
ActivityIndicator, 
ScrollView} from 'react-native';
import Input from '../../components/Input';
import HideInput from '../../components/HideInput';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import UserService from '../../services/UserService';

export default function SignUp(){
    const navigation = useNavigation();
    const [hideout, setHideout] = useState(true);
    const [confimrHideout, setconfimrHideout] = useState(true);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password_confirmation, setPasswordConfirmation] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [logo] = useState(new Animated.ValueXY({x: 120, y: 120}));
    

    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    

    function keyboardDidShow(){
        Animated.parallel([
          Animated.timing(logo.x, {
            toValue: 80,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(logo.y, {
            toValue: 80,
            duration: 100,
            useNativeDriver: false,
    
          }),
        ]).start();
      }
    
      function keyboardDidHide(){
        Animated.parallel([
          Animated.timing(logo.x, {
            toValue: 120,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(logo.y, {
            toValue: 120,
            duration: 100,
            useNativeDriver: false,
          }),
        ]).start();
    
      }
        
   
    async function handleSignUp() {
      setLoading(true);  
      if (name == null || email == null || password == null || password_confirmation == null) {
          Alert.alert('', 'Preencha todos os campos!');
          setLoading(false);
        } else if (password != password_confirmation) {
            Alert.alert('', 'As senhas não são iguais!');
            setLoading(false);
        } else {
        UserService.signup(name, email, password, password_confirmation)
        .then((response) => {
          console.log(response);
          setLoading(false);
          Alert.alert("Sucesso", "Cadastro realizado com sucesso");
          navigation.navigate('Login');
        }
        ).catch((error) => {
          setLoading(false);
          console.log(error);
          Alert.alert("Erro", "Não foi possível realizar o cadastro");
        }
        )
      }
    }

    
    return(
        <View style={styles.backgroud}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Icon style={{ marginLeft: 10}} name="arrow-back-ios" size={25} color="white" />
            </TouchableOpacity>
            
            <KeyboardAvoidingView 
            style={styles.container}
            behavior ={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView style={{width:"100%"}}>
                <StatusBar barStyle="light-content" backgroundColor="#1D3557" />
                
                <View style={styles.containerLogo}>
                    <Animated.Image style={{height: logo.y, width:logo.x}} source={require('../../assets/logo.png')}/>
                </View>               

                
                <Input icon="person" placeholder="Digite seu nome" value={name} onChangeText={setName} />
                <Input icon="email" placeholder="Digite seu email" value={email} onChangeText={setEmail} />
                <HideInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={hideout} setHideout={setHideout} />
                <HideInput icon="lock" placeholder="Confirme sua senha" value={password_confirmation} onChangeText={setPasswordConfirmation} secureTextEntry={confimrHideout} setHideout={setconfimrHideout} />
                
                <View>
                    <TouchableOpacity 
                        style={styles.buttonCadastro} onPress={() => handleSignUp()}>
                        {isLoading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.Cadastrar}>Cadastrar</Text>}
                    </TouchableOpacity>
                </View>
                
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
        
    );


}

