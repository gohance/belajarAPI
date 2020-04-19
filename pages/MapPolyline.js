import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import MapView , { Marker, Polyline } from 'react-native-maps'

import gohan from '../images/gohan.jpg'
import purwadhika from '../images/purwadhika.png'

export default class MapPolyline extends Component {
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

        const coordinate = [
          { latitude: -6.302403, longitude: 106.652248 },
          { latitude: -6.3432197, longitude: 106.846424 }
        ];

         return (
          <View style ={styles.container}>
            <MapView style={styles.map}
              region={{
                latitude: -6.302403, longitude: 106.652248,
                latitudeDelta: 0.1, longitudeDelta: 0.1,
              }}>
              <Polyline 
                coordinates={coordinate}
                strokeWidth={10}
                strokeColor={'red'}
                fillColor={'yellow'}
                />

              <MapView.Marker 
                coordinate={coordinate[0]} 
                title={'Purwadhika'}
                description={'Purwadhika'}
                >
                <Image 
                  source={purwadhika}
                  style={{width:50, height:50, borderRadius:25}} 
                  />
              </MapView.Marker>
              <MapView.Marker 
                coordinate={coordinate[1]} 
                title={'Gohan'}
                description={'Parningota'}
                >
                <Image 
                  source={gohan}
                  style={{width:50, height:50, borderRadius:25}} 
                  />
              </MapView.Marker>
              </MapView>
          </View>
         )
    }
}
