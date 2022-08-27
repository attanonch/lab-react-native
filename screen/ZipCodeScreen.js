import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Si Thammarat', code: '80160' },
    { place: 'Surat Thani', code: '84000' },
    { place: 'Phangnga', code: '82000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Yala', code: '95000' },
    { place: 'Pattani', code: '94000' },
    { place: 'Narathiwat', code: '96000' },

]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bghome.jpg')} style={styles.backdrop}>
            <View>
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    ); 
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    zipItem: {
        color: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        fontSize: 25,
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    textwhite: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 25,
    }
})