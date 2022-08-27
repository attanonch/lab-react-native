import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default function Forecast(props){
    return (
        <View style = {styles.weatherContain}> 
            <Text style={styles.textwhite}>main : {props.main} </Text>
            <Text style={styles.textwhite}>Descrtion : {props.description}</Text>
            <Text style={styles.textwhite}>Temperature : {props.temp} °C</Text>
            
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
        borderRadius : 10,
        color: 'black',
        marginTop: 15,
    }
  });
