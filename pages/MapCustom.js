import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import MapView , { Marker } from 'react-native-maps'
import gohan from '../images/gohan.jpg'

export default class MapCustom extends Component {
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

        const pin = {
          latitude: -6.302403, longitude: 106.652248 
        };

         return (
          <View style ={styles.container}>
            <MapView 
              style={styles.map}
              region={{
                latitude: -6.302403, longitude: 106.652248,
                latitudeDelta: 0.01, longitudeDelta: 0.01,
                }}
                >
                <MapView.Marker 
                  coordinate={pin} 
                  title={'Gohan'}
                  description={'Purwadhika'}
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
