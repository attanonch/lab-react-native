import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet} from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){
    const[forecastInfo, setForecastInfo]= useState({
        main: '-',
        descrtion: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text style={styles.textwhite}>Zip Code</Text>
        <Text style={styles.textwhite}>{props.zipCode}</Text>
        <Forecast {...forecastInfo}/>
        </ImageBackground>

    )  
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    textwhite: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 25,
      },

   });
