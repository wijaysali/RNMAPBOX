// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import Mapbox from '@react-native-mapbox-gl/maps';
// import GetLatLong from './GetLatLong';

// Mapbox.setAccessToken("pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ");

// const MapsApp = () => {
//   <GetLatLong/>
// }


// export default MapsApp

// import React, {Component} from 'react';
// import {View, Image} from 'react-native';
// import MapboxGL from '@mapbox/react-native-mapbox-gl';

// Mapbox.setAccessToken("pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ");

// const coordinates = [
//   [-73.98330688476561, 40.76975180901395],
//   [-73.96682739257812, 40.761560925502806],
//   [-74.00751113891602, 40.746346606483826],
//   [-73.95343780517578, 40.7849607714286],
//   [-73.99017333984375, 40.71135347314246],
//   [-73.98880004882812, 40.758960433915284],
//   [-73.96064758300781, 40.718379593199494],
//   [-73.95172119140624, 40.82731951134558],
//   [-73.9829635620117, 40.769101775774935],
//   [-73.9822769165039, 40.76273111352534],
//   [-73.98571014404297, 40.748947591479705]
// ]

// export default class App extends Component<{}> {
//   constructor (props) {
//     super(props);
  
//     this.state = {
//       coordinates: coordinates
//     };
//   }

//   renderAnnotation (counter) {
//     const id = `pointAnnotation${counter}`;
//     const coordinate = this.state.coordinates[counter];
//     const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

//     return (
//       <MapboxGL.PointAnnotation
//         key={id}
//         id={id}
//         title='Test'
//         coordinate={coordinate}>

//         <Image
//         source={require('./src/img/marker.png')}
//         style={{
//           flex: 1,
//           resizeMode: 'contain',
//           width: 25,
//           height: 25
//           }}/>
//       </MapboxGL.PointAnnotation>
//     );
//   }

//   renderAnnotations () {
//     const items = [];

//     for (let i = 0; i < this.state.coordinates.length; i++) {
//       items.push(this.renderAnnotation(i));
//     }

//     return items;
//   }

//   render () {
//     return (
//       <View style={{flex: 1}}>
//         <MapboxGL.MapView
//         ref={(c) => this._map = c}
//         style={{flex: 1}}
//         zoomLevel={11}
//         showUserLocation={true}
//         userTrackingMode={1}
//         centerCoordinate={this.state.coordinates[0]}>
//           {this.renderAnnotations()}
//         </MapboxGL.MapView>
//       </View>
//       );
//   }
// }

import React from 'react';
import {StyleSheet, View} from 'react-native';
import GetLatLong from "./GetLatLong";
import SetAnnotation from "./SetAnnotation";

const App = () => {
  return (
    <View style={styles.container}>
        <SetAnnotation/>
    </View>
  );
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
    }
});

export default App;