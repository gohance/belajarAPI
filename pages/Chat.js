import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import { database } from '../utility/firebase'

export default class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [],
            account: {
                email: ''
            },
            newMessage: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSend = this.handleSend.bind(this)
        this.getMessagesData = this.getMessagesData.bind(this)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ marginBottom: 50 }}>
                    {
                        this.state.messages.map(message => {
                            return(
                                <View key={message.id} style={{ 
                                    borderBottomColor: '#d1d1d1', 
                                    borderBottomWidth: 1,
                                    padding: 10
                                    }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ flex: 1, color: "#888", fontSize: 12 }}>
                                            {message.sender_name}
                                        </Text>
                                        <Text style={{ color: "#888", fontSize: 12 }}>
                                            {message.date}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>
                                            {message.content}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={{ 
                        flexDirection: 'row', 
                        alignSelf: 'flex-end', 
                        position:'absolute', 
                        bottom:0, 
                        backgroundColor: '#ffffff'
                        }}
                        >
                    <TextInput placeholder="Teks kamu" style= {{
                        flex:1,
                        paddingLeft: 10,
                        paddingRight: 10
                        }}
                        onChangeText={(input) => {this.handleChange(input)}}
                        />
                    <Button title="Send" style={{ 
                        width: 150
                        }}
                        onPress={this.handleSend}
                        />
                </View>
            </View>
        )
    }

    componentDidMount () {
        const { email } = this.props.route.params;
        this.setState({
            account: {
                email: email
            }
        })
        this.getMessagesData();
    }

    getMessagesData () {
        const self = this;
        self.setState({
            messages: []
        }, function() {
            database.ref('messages').on('value', function(snapshots){
                var newData = []
                snapshots.forEach(snapshot => {
                    var value = snapshot.val()
                    value['key'] = snapshot.key
                    newData.push(value)
                })
                self.setState({
                    messages: newData
                })
            })
        })
    }

    handleChange (input) {
        const self = this;
        self.setState({
            newMessage: input
         })
    }

    handleSend () {
        const self = this;
        database.ref('messages').push({
            content: self.state.newMessage,
            sender_name: self.state.account.email,
            date: new Date().toTimeString()
        }, function () {
            self.setState({
                newMessage: ''
            })
        })
    }
}
