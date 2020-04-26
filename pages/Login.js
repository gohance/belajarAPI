import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native' 
import { database, auth } from '../utility/firebase'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
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
                    onChangeText={(input, name) => {this.handleChange(input, 'email')}}
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
                    onChangeText={(input, name) => {this.handleChange(input, 'password')}}
                    />
                <Button title="Login" style={{
                    height: 100
                    }}
                    onPress={this.handleLogin}
                    />
            </View>
        )
    }

    handleChange (input, name) {
        this.setState({
            [name]: input
        })
    }

    handleLogin () {
        const self = this;
        auth.signInWithEmailAndPassword(self.state.email, self.state.password)
            .then(result => {
                self.props.navigation.navigate('Chat', {
                    account: {
                        email: self.state.email
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        
        // database.ref('users')
        //     .orderByChild('email').equalTo(this.state.email).limitToFirst(1)
        //     .once('value', function (snapshots) {
        //         if(snapshots != null) {
        //             snapshots.forEach(snapshot => {
        //                 var account = snapshot.val()
        //                 account[key] = snapshot.key

        //                 // TODO login
        //                 auth.signInWithEmailAndPassword(self.state.email, self.state.password)
        //                 .then(result => {
        //                     self.props.navigation.navigate('Chat', {
        //                         account: account
        //                     })
        //                 })
        //                 .catch(err => {
        //                     console.log(err)
        //                 })
        //             })
        //         } else {
        //             // TODO signup
        //             auth.createUserWithEmailAndPassword(self.state.email, self.state.password)
        //                 .then(result => {
        //                     self.props.navigation.navigate('Chat', {
        //                         account: {
        //                             email: self.state.email
        //                         }
        //                      })
        //                 })
        //                 .catch(err => {
        //                     console.log(err)
        //                 })
        //         }
        //     })
    }
}
