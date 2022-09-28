import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import styles from './styles'
import Card from '../../components/card'
import Header from '../../components/header'
import Options from '../../components/options'

export default function Home() {

  const [isLoading, setLoading] = useState(false)
  const [lugares, setLugares] = useState([])
  const [indice, setIndice] = useState('restaurantes')

  const atualizaHome = (opcao) => {
    setLugares([])
    setIndice(opcao)
  }

  async function getData(opcao) {
    setLoading(true)
    await fetch(`http://uenp.fun/turismo/api/${opcao}`)
      .then( res => res.json())
        .then( res => { 
          switch(opcao){
            case 'atracoes':
              res.atracoes.forEach(item => {
                setLugares(prevState => [ ...prevState, {
                  id: JSON.stringify(item.id),
                  nome: JSON.stringify(item.nome),
                  endereco: JSON.stringify(item.endereco),
                  maps: JSON.stringify(item.maps),
                  logo: JSON.stringify(item.logo),
                  descricao: JSON.stringify(item.descricao),
                  preco: null,
                  email: JSON.stringify(item.email),
                  site: JSON.stringify(item.site),
                  telefone: JSON.stringify(item.telefone),
                  whats: JSON.stringify(item.whats),
                  insta: JSON.stringify(item.insta),
                  face: JSON.stringify(item.face),
                  latitude: JSON.stringify(item.latitude),
                  longitude: JSON.stringify(item.longitude),
                  categoria: JSON.stringify(item.categoria),
                  cozinhas: null,
                }])
              })
              break;
            case 'bares':
              res.bares.forEach(item => {
                setLugares(prevState => [ ...prevState, {
                  id: JSON.stringify(item.id),
                  nome: JSON.stringify(item.nome),
                  endereco: JSON.stringify(item.endereco),
                  maps: JSON.stringify(item.maps),
                  logo: JSON.stringify(item.logo),
                  descricao: JSON.stringify(item.descricao),
                  preco: JSON.stringify(item.preco),
                  email: JSON.stringify(item.email),
                  site: JSON.stringify(item.site),
                  telefone: JSON.stringify(item.telefone),
                  whats: JSON.stringify(item.whats),
                  insta: JSON.stringify(item.insta),
                  face: JSON.stringify(item.face),
                  latitude: JSON.stringify(item.latitude),
                  longitude: JSON.stringify(item.longitude),
                  categoria: null,
                  cozinhas: JSON.stringify(item.cozinhas),
                }])
              })
              break;
            case 'eventos':
              res.eventos.forEach(item => {
                setLugares(prevState => [ ...prevState, {
                  id: JSON.stringify(item.id),
                  nome: JSON.stringify(item.nome),
                  endereco: JSON.stringify(item.endereco),
                  maps: JSON.stringify(item.maps),
                  logo: JSON.stringify(item.logo),
                  descricao: JSON.stringify(item.descricao),
                  preco: JSON.stringify(item.preco),
                  email: JSON.stringify(item.email),
                  site: JSON.stringify(item.site),
                  telefone: JSON.stringify(item.telefone),
                  whats: JSON.stringify(item.whats),
                  insta: JSON.stringify(item.insta),
                  face: JSON.stringify(item.face),
                  latitude: JSON.stringify(item.latitude),
                  longitude: JSON.stringify(item.longitude),
                  categoria: null,
                  cozinhas: null,
                }])
              })
              break;
            case 'hoteis':
              res.hoteis.forEach(item => {
                setLugares(prevState => [ ...prevState, {
                  id: JSON.stringify(item.id),
                  nome: JSON.stringify(item.nome),
                  endereco: JSON.stringify(item.endereco),
                  maps: JSON.stringify(item.maps),
                  logo: JSON.stringify(item.logo),
                  descricao: JSON.stringify(item.descricao),
                  preco: JSON.stringify(item.preco),
                  email: JSON.stringify(item.email),
                  site: JSON.stringify(item.site),
                  telefone: JSON.stringify(item.telefone),
                  whats: JSON.stringify(item.whats),
                  insta: JSON.stringify(item.insta),
                  face: JSON.stringify(item.face),
                  latitude: JSON.stringify(item.latitude),
                  longitude: JSON.stringify(item.longitude),
                  categoria: null,
                  cozinhas: null,
                }])
              })
              break;
            case 'restaurantes':
              res.restaurantes.forEach(item => {
                setLugares(prevState => [ ...prevState, {
                  id: JSON.stringify(item.id),
                  nome: JSON.stringify(item.nome),
                  endereco: JSON.stringify(item.endereco),
                  maps: JSON.stringify(item.maps),
                  logo: JSON.stringify(item.logo),
                  descricao: JSON.stringify(item.descricao),
                  preco: JSON.stringify(item.preco),
                  email: JSON.stringify(item.email),
                  site: JSON.stringify(item.site),
                  telefone: JSON.stringify(item.telefone),
                  whats: JSON.stringify(item.whats),
                  insta: JSON.stringify(item.insta),
                  face: JSON.stringify(item.face),
                  latitude: JSON.stringify(item.latitude),
                  longitude: JSON.stringify(item.longitude),
                  categoria: null,
                  cozinhas: JSON.stringify(item.cozinhas),
                }])
              })
              break;
          }
        })
      .catch( error => console.log(error))
      setLoading(false)
  }

   useEffect(() => {
    getData(indice)
  },[indice])
  
  return (
    <View style={styles.container}>
      <Header/>
      <Options atualizaHome={atualizaHome}/>
      {isLoading ? <ActivityIndicator style={styles.loading} size="large" color="#1D3557"/> :
        <View>
          <ScrollView style={styles.scrollView}>
            
            {lugares.map(lugar => 
              <Card 
                key={lugar.id} 
                nome={lugar.nome} 
                endereco={lugar.endereco} 
                maps={lugar.maps}
                logo={lugar.logo}
                descricao={lugar.descricao}
                preco={lugar.preco}
                email={lugar.email}
                site={lugar.site}
                telefone={lugar.telefone}
                whats={lugar.whats}
                insta={lugar.insta}
                face={lugar.face}
                latitude={lugar.latitude}
                longitude={lugar.longitude}
                indice={indice}
              />
              )}
          </ScrollView>
        </View>
      }
      <StatusBar barStyle="light-content" backgroundColor="#1D3557" />
        
    </View>
  )
}