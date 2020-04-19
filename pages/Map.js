import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps'


export default class Map extends Component {
    render() {
        const styles = StyleSheet.create({
            container: {
              ...StyleSheet.absoluteFillObject,
              height: 400,
              width: 400,
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
            map: {
              ...StyleSheet.absoluteFillObject,
            }
        })
          
        return (
            <View style ={styles.container}>
                <MapView
                style={styles.map}
                region={{
                    latitude: -6.302403,
                    longitude: 106.652248,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                }}
                >
                </MapView>
            </View>
        )
    }
}
