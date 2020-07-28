import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import MapboxGL from '@react-native-mapbox-gl/maps';

Mapbox.setAccessToken("pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ");

const MarkerApp = () => {
    const listPosition = [
        [-73.98330688476561, 40.76975180901395],
        [-73.96682739257812, 40.761560925502806],
        [-74.00751113891602, 40.746346606483826],
        [-73.95343780517578, 40.7849607714286],
        [-73.99017333984375, 40.71135347314246],
        [-73.98880004882812, 40.758960433915284],
        [-73.96064758300781, 40.718379593199494],
        [-73.95172119140624, 40.82731951134558],
        [-73.9829635620117, 40.769101775774935],
        [-73.9822769165039, 40.76273111352534],
        [-73.98571014404297, 40.748947591479705]
    ];

    const renderAnotation = () => {
        const items = [];

        for (let i = 0; i < listPosition.length; i++) {
            const title = 'Longitude : ' + listPosition[i][0] + ' Latitude : ' + listPosition[i][1];
            const id = '' + i;

            console.log(id + "-" + title);
            items.push(
                <MapboxGL.PointAnnotation
                    key={id}
                    id={id}
                    coordinate={listPosition[i]}
                    title={"This is a point : " + title}
                >
                    <MapboxGL.Callout title={title}/>
                </MapboxGL.PointAnnotation>
            )
        }
        console.log(items);
        return items
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.Camera
                        zoomLevel={10}
                        centerCoordinate={listPosition[0]}
                    />
                    {renderAnotation()}
                </MapboxGL.MapView>
            </View>
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
    marker: {
        flex: 1,
        resizeMode: 'stretch',
        width: 300,
        height: 300,
    },
});

export default MarkerApp;