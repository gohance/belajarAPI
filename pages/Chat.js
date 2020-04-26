import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

export default class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { id: 1, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 2, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 3, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 4, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 5, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
                { id: 6, sender_name: "Gohan Parningotan", content: "ini message", date: "123"},
            ]
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.messages.map(message => {
                            return(
                                <View key={message.id}>
                                    <View>
                                        <Text>
                                            {message.sender_name}
                                        </Text>
                                        <Text>
                                            {message.date}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            {message.content}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View>

                </View>
            </View>
        )
    }
}
