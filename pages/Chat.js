import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TextInput, Button } from 'react-native'

export default class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { id: 1, sender_name: "Gohan Parningotan", content: "ini message", date: "123", senderId: 123 },
                { id: 2, sender_name: "Gohan Parningotan", content: "ini message", date: "123" },
                { id: 3, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 4, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 5, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 6, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 7, sender_name: "Gohan Parningotan", content: "ini message", date: "123", senderId: 123 },
                { id: 8, sender_name: "Gohan Parningotan", content: "ini message", date: "123" },
                { id: 9, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 10, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 11, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 12, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
            ],
            account: {
                id : 123,
                name: 'Gohan',
                email: 'gohanparningotanlg@gmail.com'
            }
        }
    }
    render() {
        return (
            <View style={{ flext: 1 }}>
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
                    }}/>
                    <Button title="Send" style={{ 
                        width: 150
                    }}/>
                </View>
            </View>
        )
    }
}
