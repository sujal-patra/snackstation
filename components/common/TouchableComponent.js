import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  Pressable
} from "react-native";
import { AuthContext } from "../../contexts/authContext";

const TouchableComponent = ({ pageChangeHandler }) => {

  
  const { setAuth } = useContext(AuthContext);



  return (
    <View style={styles.container}>
      <Text>Touchable Component Demo </Text>
      <Text>------------------Pressable-------------------</Text>

      <Pressable
        onPress={() => {
          pageChangeHandler("touch");
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://th.bing.com/th?id=OIP.KHZXE_Xx_R3ML0CNUkZUgAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          }}
        />
      </Pressable>
      <Text>TouchableHighlight </Text>

      <TouchableHighlight
        onPress={() => {
          console.log("====================================");
          console.log("Pressed touch");
          console.log("====================================");
          
        }}
        onLongPress={() => {
          console.log("====================================");
          console.log("Long Pressed touch");
          console.log("====================================");
        }}
      >
       
        <Text>TouchangleHighlight</Text>
      </TouchableHighlight>
      <Text>-----------------TouchableOpacity--------------------</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("====================================");
          console.log("Tapped touch - Setting Auth");
          setAuth(auth => ({
            ...auth,
            isAuthenticated: true,
            user: { name: 'Hemant' }
          }));
          console.log("====================================");
        }}
        onLongPress={() => {
          console.log("====================================");
          console.log("Long Pressed touch");
          console.log("====================================");
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://th.bing.com/th?id=OIP.KHZXE_Xx_R3ML0CNUkZUgAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          }}
        />
      </TouchableOpacity>
      <Text>------------------TouchableWithoutFeedback-------------------</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("====================================");
          console.log("Tapped touch");
          console.log("====================================");
        }}
        onLongPress={() => {
          console.log("====================================");
          console.log("Long Pressed touch");
          console.log("====================================");
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://th.bing.com/th?id=OIP.KHZXE_Xx_R3ML0CNUkZUgAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          }}
        />
      </TouchableWithoutFeedback>
      <Text>------------------TouchableNativeFeedback-------------------</Text>
      <TouchableNativeFeedback
        onPress={() => {
          console.log("====================================");
          console.log("Tapped touch");
          console.log("====================================");
        }}
        onLongPress={() => {
          console.log("====================================");
          console.log("Long Pressed touch");
          console.log("====================================");
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://th.bing.com/th?id=OIP.KHZXE_Xx_R3ML0CNUkZUgAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          }}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TouchableComponent;