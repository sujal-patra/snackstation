import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://th.bing.com/th/id/OIP.MLoG6Q6nHjQOMCwz-bT4GwHaNK?rs=1&pid=ImgDetMain'}} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, ///    full , 2 -- 2/12 - parent
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {

    },
    text: {

    }
});

export default Welcome;