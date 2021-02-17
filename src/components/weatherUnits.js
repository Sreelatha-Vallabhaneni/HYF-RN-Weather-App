import React, {memo} from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const UnitsIcons = memo(({ feelsLike, humidity, speed, pressure}) => {
    //console.log('render WeatherDetails');
  return (
    <View style={styles.wrapContainer}>
        <View>
            <View style={styles.wrap}>
                <FontAwesome5 name="thermometer-three-quarters" size={45} color="black" />
                <View style={styles.textWrap}>
                    <Text style={{fontSize:25, color:'gray'}}>Feels like</Text>
                    <Text style={{fontSize:20, fontWeight:'800'}}>{(feelsLike - 273.15).toFixed(0)} &#x2103;</Text>
                </View>
            </View>
            <View style={styles.wrap}>
                <Entypo name="water" size={45} color="skyblue" />
                <View style={styles.textWrap}>
                    <Text style={{fontSize:25, color:'gray'}}>Humidity</Text>
                    <Text style={{fontSize:20, fontWeight:'800'}}>{humidity} %</Text>
                </View>
            </View>
        </View>
        <View>
            <View style={styles.wrap}>
                <Feather name="wind" size={45} color="black" />
                <View style={styles.textWrap}>
                    <Text style={{fontSize:25, color:'gray'}}>Wind</Text>
                    <Text style={{fontSize:20, fontWeight:'800'}}>{speed} m/s</Text>
                </View>
            </View>
            <View style={styles.wrap}>
                <Fontisto name="day-sunny" size={45} color="orange" />
                <View style={styles.textWrap}>
                    <Text style={{fontSize:25, color:'gray'}}>Pressure</Text>
                    <Text style={{fontSize:20, fontWeight:'800'}}>{pressure} hPa</Text>
                </View>
            </View>
        </View>      
    </View>
    );
})

const styles = StyleSheet.create({
    wrapContainer: {
        flexDirection:'row',
    },
    wrap:{
        flexDirection:'row',
        //borderWidth:1,
        width: 200,
        height:200/2,
        justifyContent:'space-around',
        alignItems:'center'
    },
    textWrap:{
        //borderWidth:1,
        height:'100%',
        justifyContent:'space-evenly',
    }
});

export default UnitsIcons;