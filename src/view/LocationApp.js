import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Mapbox from '@react-native-mapbox-gl/maps';

Mapbox.setAccessToken("pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ");

const LocationApp = () => {

    const setLocation = (event) => {
        const {geometry} = event;
        setLatitude(geometry.coordinates[1]);
        setLongitude(geometry.coordinates[0])
    };

    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");

    const renderBubble = () => {
        return (
            <View style={styles.bubbleContainer}>
                <Text>Lat : {latitude}</Text>
                <Text>Long : {longitude}</Text>
            </View>
        )
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} onPress={(e) => setLocation(e)}>
                    <Mapbox.Camera
                        zoomLevel={15}
                        centerCoordinate={[106.83396661466186, -6.1566922955425065]}
                    />
                </Mapbox.MapView>
            </View>
            {renderBubble()}
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        height: "100%",
        width: "100%",
    },
    map: {
        flex: 1,
    },
    bubbleContainer: {
        borderRadius: 30,
        position: 'absolute',
        bottom: 16,
        left: 48,
        right: 48,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

export default LocationApp;