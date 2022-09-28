import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'

export default function Local({route}) {
    const navigation = useNavigation()
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch(route.params.indice){
            case 'restaurantes':
                setTitle('RESTAURANTES')
                break;
            case 'hoteis':
                setTitle('HOTÉIS')
                break;
            case 'eventos':
                setTitle('EVENTOS')
                break;
            case 'atracoes':
                setTitle('ATRAÇÕES')
                break;
            case 'bares':
                setTitle('BARES')
                break;
            default:
                break;
        }
    })

    return (        
        <View style={styles.container}>
            <View style={styles.header}> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Icon style={styles.icon} name="arrow-back-ios" size={25} color="#D9D9D9" />
                    <Text style={styles.text}>{title}</Text>
                </TouchableOpacity>
            </View>            

            <View>
            
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: route.params.logo}} resizeMode='stretch'></Image>
                </View>

                <View style={styles.line}/>

                <View style={[styles.titleContainer, {marginLeft: '2%'}]}>
                    <View style={styles.title}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>{route.params.nome}</Text>
                    </View>
                    <View style={styles.starContainer}>
                        <MaterialCommunityIcons name="star" color="#FFC000" size={25}/>
                        <Text style={{fontWeight: '800', color:"#FFC000"}}>{(Math.random() * 5).toFixed(1)}</Text>
                    </View>
                </View>
                <View style={[{height: '10%'}, {marginLeft: '2%'}]}>
                    <ScrollView style={styles.description}>
                        <Text style={{textAlign:"justify", color: "#000"}}>{route.params.descricao}</Text>
                    </ScrollView>
                </View>

                <View style={styles.lineTopicos}/>
                <View style={{flexDirection: 'row'}}>
                    {route.params.preco == null || route.params.preco == 'null' 
                        ?   
                        <View style={[styles.price, {marginLeft: '2%', width: '50%'}]}>
                            <Text style={{fontWeight: '600', fontSize: 20}}>Gratuito</Text>
                        </View>
                        :
                        <View style={[styles.price, {marginLeft: '2%', width: '50%'}]}>
                            <Text style={{fontWeight: '600', fontSize: 20}}>R$ {route.params.preco}</Text>
                        </View>
                    }
                    <TouchableOpacity style={styles.buttonCG} onPress={ async () => await Linking.openURL(route.params.maps)}>
                        <MaterialCommunityIcons name="navigation" color="#FFF" size={20}/>
                        <Text style={styles.buttonCGText}>Como chegar?</Text>
                    </TouchableOpacity> 
                </View>
                                     
                <View style={styles.lineTopicos}/>

                <View style={[styles.mapView, {marginLeft: '2%'}]}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: parseFloat(route.params.latitude) ,
                            longitude: parseFloat(route.params.longitude),
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        }}>
                        <MapView.Marker 
                            coordinate={{
                                latitude: parseFloat(route.params.latitude) ,
                                longitude: parseFloat(route.params.longitude)
                            }}
                            title={route.params.nome}
                        />
                    </MapView>
                </View>                

                <Text style={{fontWeight: '400', marginTop: -4, color: "#1c1c1c", fontSize: 12, marginLeft: '2%'}}>{route.params.endereco}</Text>  
                
                <View style={styles.lineTopicos}/>

                <ScrollView style={{height: '8%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '2%'}}>Contato</Text>
                    <View style={styles.contact}>
                            {route.params.site != null && route.params.site != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="web" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(`https://${route.params.site}`)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Site</Text>
                                    </View>
                                    
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="web" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Site</Text>
                                    </View>
                            }

                            {route.params.whats != null && route.params.whats != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="whatsapp" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(`https://api.whatsapp.com/send?phone=55${route.params.whats.substring(1, 3) + route.params.whats.substring(4,10) + route.params.whats.substring(11,15)}`)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Whatsapp</Text>
                                    </View>
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="whatsapp" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Whatsapp</Text>
                                    </View>
                            }

                            {route.params.telefone != null && route.params.telefone != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="phone" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(`tel:${route.params.telefone}`)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Telefone</Text>
                                    </View>
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="phone" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Telefone</Text>
                                    </View>
                            }

                            {route.params.email != null && route.params.email != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="email" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(`mailto:${route.params.email}`)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Email</Text>
                                    </View>
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="email" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Email</Text>   
                                    </View>
                            }   

                            {route.params.insta != null && route.params.insta != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="instagram" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(route.params.insta)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Instagram</Text>
                                    </View>
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="instagram" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Instagram</Text>
                                    </View>
                            }

                            {route.params.face != null && route.params.face != 'null' 
                                ?   
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="facebook" 
                                            color="#1D3557" 
                                            size={25} 
                                            onPress={async () => await Linking.openURL(route.params.face)}
                                        />
                                        <Text style={{color: "#1D3557", marginLeft: 2}}>Facebook</Text>
                                    </View>
                                :
                                    <View style={styles.contactItem}>
                                        <MaterialCommunityIcons 
                                            name="facebook" 
                                            color="#D9D9D9" 
                                            size={25} 
                                        />
                                        <Text style={{color: "#D9D9D9", marginLeft: 2}}>Facebook</Text>
                                    </View>
                            }
                    </View>
                </ScrollView>
            </View>        
       </View>
    )
}