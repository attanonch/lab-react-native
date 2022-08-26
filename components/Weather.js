import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet} from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){

    const[forecastInfo, setForecastInfo]= useState({
        main: '-',
        descrtion: '-',
        temp: 0
    })
    useEffect(() => {
            console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c403ce497913cce16c95018fa40b2017`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                 })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])
        
   

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
