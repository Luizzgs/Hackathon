import React, {Component, useState} from "react";
import {View, Text, TextInput, Touchable, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


class HideInput extends Component{
    render(){
        return(
            <View style={
                {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                marginBottom: 10,
                height: 50,
                }}>
                <Icon name="lock-closed" size={20} color="#000" style={{padding: 10}} />
                <TextInput 
                    style={{color: 'Black', fontSize: 18, width: '77%'}}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    value={this.props.value}
                    onChangeText={(value)=>this.props.onChangeText(value)}
                    secureTextEntry={this.props.secureTextEntry}
                />
                <TouchableOpacity  onPress={() => this.props.setHideout(!this.props.secureTextEntry)}>
                    { this.props.secureTextEntry ?
                        <Icon name="eye" size={20} color="#000" style={{justifyContent:"center", alignSelf:"center"}} />
                        :
                        <Icon name="eye-off" size={20} color="#000" style={{justifyContent:"center", alignSelf:"center"}} />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

export default HideInput;