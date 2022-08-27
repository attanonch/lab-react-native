import React from "react";
import { View, Text, StyleSheet, Button,Icon } from "react-native";



export default function Forecast(props){
    return (
        <View style = {styles.weatherContain}> 
            <Text style={styles.textwhite}>main : {props.main} </Text>
            <Text style={styles.textwhite}>Descrtion : {props.description}</Text>
            <Text style={styles.textwhite}>Temperature : {props.temp} °C</Text>
            <Text style={styles.textwhite}>Humidity :  {props.humidity} RH</Text>
            <Text style={styles.textwhite}>Wind speed :  {props.wind} knots</Text>
            <Button color="red" title ="Home" type="Home"Button />
            
 
            
        </View>
    )
}

const styles = StyleSheet.create({
    textwhite: {
      color: 'black', 
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 15,
    },
    weatherContain: {
        backgroundColor : "#FAF0E6" ,
        borderRadius : 5,
        color: 'black',
        marginTop: 15,
    }

  });
