import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native' 

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
                    Catato
                </Text>
                <Text style={{ textAlign: 'center', marginBottom: 24 }}>
                    Purwadhika Internal Messaging Platform
                </Text>
                <TextInput 
                    placeholder='Email'
                    style={{ 
                        borderWidth: 1, borderColor: "#d1d1d1", borderRadius: 5, 
                        paddingLeft: 10, paddingRight: 10,
                        marginBottom: 10,
                        backgroundColor: '#fff'
                        }}
                    />
                <TextInput 
                    textContentType="password"
                    placeholder='Password'
                    style={{ 
                        borderWidth: 1, borderColor: "#d1d1d1", borderRadius: 5, 
                        paddingLeft: 10, paddingRight: 10,
                        marginBottom: 10,
                        backgroundColor: '#fff'
                        }}
                    />
                <Button title="Signup" style={{
                    height: 100
                    }}
                    />
            </View>
        )
    }
}
