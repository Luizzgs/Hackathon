import React, {Component} from "react";
import {View, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

class Input extends Component{
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
                <Icon name={this.props.icon} size={20} color="#000" style={{padding: 10}} />
                <TextInput 
                    style={{color: 'Black',fontSize: 18, width: '85%'}}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    value={this.props.value}
                    onChangeText={(value)=>this.props.onChangeText(value)}
                    error={this.props.error}

                />
            </View>
        )
    }
}

export default Input;