import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'

export default function Local({route}) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Icon style={styles.icon} name="arrow-back-ios" size={25} color="#D9D9D9" />
                </TouchableOpacity>
                <View style={styles.text}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#D9D9D9'}}>Visualizar {route.params.indice}</Text>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: route.params.logo}} resizeMode='stretch'></Image>
            </View>

            <View style={styles.line}/>

            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>{route.params.nome}</Text>
                </View>
                <View style={styles.starContainer}>
                    <MaterialCommunityIcons name="star" color="yellow" size={25}/>
                    <Text style={{fontWeight: 'bold', color:'yellow'}}>{(Math.random() * 5).toFixed(1)}</Text>
                </View>
            </View>
            <View style={{height: '10%'}}>
                <ScrollView style={styles.description}>
                    <Text style={{textAlign:"justify"}}>{route.params.descricao}</Text>
                </ScrollView>
            </View>


            {route.params.preco == null || route.params.preco == 'null' 
                ?   
                <View style={styles.price}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Gratuito</Text>
                </View>
                :
                <View style={styles.price}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}> R$ {route.params.preco}</Text>
                </View>
            }

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

            <Text>{route.params.endereco
            }</Text>  
            
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Contato</Text>
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
                                <Text style={{color: "#1D3557"}}>Site</Text>
                            </View>
                            
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="web" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Site</Text>
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
                                <Text style={{color: "#1D3557"}}>Whatsapp</Text>
                            </View>
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="whatsapp" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Whatsapp</Text>
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
                                <Text style={{color: "#1D3557"}}>Telefone</Text>
                            </View>
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="phone" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Telefone</Text>
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
                                <Text style={{color: "#1D3557"}}>Email</Text>
                            </View>
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="email" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Email</Text>   
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
                                <Text style={{color: "#1D3557"}}>Instagram</Text>
                            </View>
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="instagram" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Instagram</Text>
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
                                <Text style={{color: "#1D3557"}}>Facebook</Text>
                            </View>
                        :
                            <View style={styles.contactItem}>
                                <MaterialCommunityIcons 
                                    name="facebook" 
                                    color="#D9D9D9" 
                                    size={25} 
                                />
                                <Text style={{color: "#D9D9D9"}}>Facebook</Text>
                            </View>
                    }
                </View>
                      
       </View>
    )
}