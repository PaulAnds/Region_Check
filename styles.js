import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
    },
    letters:{
        flexDirection: 'row'
    },
    mapView:{
        alignSelf: 'stretch',
        height: 450,
        margin: 30
    },
    hotelText: {
        color: "#008080",
    },

    barText: {
        color: "#800000",
    },

    boldText: {
        fontWeight: 'bold',
    }
})