import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';


export default class MapDirection extends Component {
  render() {
    const coordinates = [
      { latitude: -6.302403, longitude: 106.652248 },
      { latitude: -6.3432197, longitude: 106.846424 }
    ];

    const initialData = {
      LATITUDE: -6.302403,
      LONGITUDE: 106.652248,
      LATITUDE_DELTA: 0.015,
      LONGITUDE_DELTA: 0.015,
      GOOGLE_MAPS_APIKEY: 'AIzaSyCa9r29ZmroRoPn6yRIZgNKAXeP_d02byg'
    }

    return (
      <MapView
        initialRegion={{
          latitude: initialData.LATITUDE, 
          longitude: initialData.LONGITUDE,
          latitudeDelta: initialData.LATITUDE_DELTA,
          longitudeDelta: initialData.LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}>
          <MapView.Marker 
            coordinate={coordinates[0]} />

          <MapView.Marker 
            coordinate={coordinates[1]} />

          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={initialData.GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink" />

        </MapView>

    )
  }
}
