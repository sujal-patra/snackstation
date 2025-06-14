import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions
} from "react-native";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

const Spaces = () => {
  console.log(StatusBar.currentHeight);
  console.log("Window height", Dimensions.get("window").height);
  console.log("Window width", Dimensions.get("window").width);

  console.log("Screen height", Dimensions.get("screen").height);
  console.log("Screen width", Dimensions.get("screen").width);

  useEffect(() => {
    const orientationChangeSubscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        console.log("Window height", window);
        console.log("Window width", screen);
      }
    );
    return () => {
      orientationChangeSubscription.remove();
    };
  }, []);
  const [activeScreen, setActiveScreen] = useState("login");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      {activeScreen === "login"
        ? <LoginScreen setActiveScreen={setActiveScreen} />
        : <SignUpScreen setActiveScreen={setActiveScreen} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Spaces;