import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props){
    return (
        <View> 
            <Text style={styles.textwhite}>{props.main}</Text>
            <Text style={styles.textwhite}>{props.descrtion}</Text>
            <Text style={styles.textwhite}>{props.temp}</Text>
            <Text style={styles.textwhite}>°C</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    textwhite: {
      color: 'white', 
      fontWeight: 'bold',
      fontSize: 25,
    },
  });
