import * as React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StoreContext = createContext([{}, () => {}])

export const useStore = () => {
  const [state, setState] = useContext(StoreContext)
  return [state, setState]
}

export const StoreProvider = ({ children }) => {
//const { getItem, setItem } = AsyncStorage.setItem('store')
const [state, setState] = useState({
    rehydrated: false,
  })
  
  
  const rehydrate = async () => {
    const data = await AsyncStorage.getItem('store')
    setState(prev => ({
      ...prev,
      ...(data && JSON.parse(data)),
      rehydrated: true,
    }))
  }

  useEffect(() => {
    rehydrate()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('store', JSON.stringify(state))
  }, [state])

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  )
}