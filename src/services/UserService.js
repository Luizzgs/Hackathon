import React, {useContext, useState} from "react";
import axios from "axios";
import api from "../util/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


class UserService {

    async signup(name, email, password, password_confirmation) {
        return(
            console.log("Salvando"),
            api.post("/register",{
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            }).then((response) => {
                return Promise.resolve(response);
            }).catch((error) => {
                console.log(error);
                return Promise.reject(error);
            }) 
            )
            
        }
        
    
        async signIn(email, password) {
            return(
                api.post("/login",{
                email: email,
                password: password,
                }).then((response) => {
                    return Promise.resolve(response);
                }).catch((error) => {
                    return Promise.reject(error);
                })
            )
        }

    async signInToken(email, password){
        return(
            api.post("/login",{
            email: email,
            password: password,
            }).then((response) => {
                if (response.data.access_token){
                    return Promise.resolve(response)
                }else{
                    return Promise.reject(response)
                }
            }).catch((error) => {
                return Promise.reject(error)
            })
        )
    }
        



}


export default new UserService();