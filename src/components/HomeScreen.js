import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { getWeatherByCityName } from "../servises/index";
import UnitsIcons from "./weatherUnits";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  // const [_, setRender] = useState(false);

  // console.log('render Homescreen');

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setRender(render=>!render)
  //   }, 1000);
  // }, []);

  const getWeatherInfo = useCallback(async () => {
    try {
      const weatherForCity = await getWeatherByCityName("Vijayawada");
      setWeatherData(weatherForCity);
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  // const getImage = useCallback(
  //   async () => {
  //     try{
  //       const image = await setImage({
  //     uri: `https://source.unsplash.com/200x200?${weatherData?.weather[0]?.main}`,
  //   })
  //   return image;
  //     }
  //     catch(error){
  //       console.log(error);
  //     }
  //   },[city]
  // )

  // const getImage = () =>
  // {
  //   const image = {
  //   uri : `https://source.unsplash.com/300x400?${weatherData?.weather[0]?.description}`,
  // };
  //   return setImage(image);
  // };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  // useEffect(() => {
  //   getImage();
  // }, [weatherData]);

  return (
    <View>
      <ImageBackground
        source={{
          uri: `https://source.unsplash.com/400x400?${weatherData?.weather[0]?.description}`,
        }}
        style={styles.image}
      >
        <View
          style={[
            styles.text,
            { flexDirection: "row", justifyContent: "space-around", top: -170 },
          ]}
        >
          <AntDesign name="menu-fold" size={35} color="black" />
          <TextInput
            style={{ fontSize: 30, width: 200 }}
            value={city}
            placeholder={"City Name"}
            placeholderTextColor="grey"
            clearTextOnFocus={true}
            //clearButtonMode={"while-editing"}
            onChangeText={setCity}
            textAlign={"center"}
          />
          <TouchableOpacity onPress={getWeatherInfo}>
            <Ionicons name="ios-search" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <Text>
          {(`${weatherData?.main?.temp}` - 273.15).toFixed(0)} &#x2103;
        </Text>
      </ImageBackground>
      <Text>{weatherData?.weather[0]?.main}</Text>
      <UnitsIcons
        feelsLike={weatherData?.main?.feels_like}
        humidity={weatherData?.main?.humidity}
        speed={weatherData?.wind?.speed}
        pressure={weatherData?.main?.pressure}
        weatherData={weatherData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 1000 / 2,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    opacity: 10,
    shadowOpacity: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
