import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';

Mapbox.setAccessToken("pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ");

const GetLatLong = () => {
    
    const renderBuble = () => {
        return (
            <View style={styles.bubleContainer}>
                <Text> Lat : {latitude}</Text>
                <Text>Long : {longitude}</Text>
            </View>
        )
    }

    const onPress = (event) => {
        const { geometry } = event;

        setLatitude(geometry.coordinates[1]);
        setLongitude(geometry.coordinates[0]);
    }

    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    style={styles.map}
                    onPress={(e) => onPress(e)}
                >
                    <Mapbox.Camera zoomLevel={11}
                        centerCoordinate={[119.952193, -9.690647]}>
                    </Mapbox.Camera>
                </Mapbox.MapView>
            </View>
            {renderBuble()}
        </View>
    )
}



const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
    }, map: {
        flex: 1,
    },
    bubleContainer: {
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        left: 40,
        right: 40,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});


export default GetLatLong;