import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { Text } from "react-native";

const ProfileComponent = () => {
  const { auth } = useContext(AuthContext);
  return (
    <View style={{ padding: 15, backgroundColor: "azure" }}>
      <Text>
        {auth.isAuthenticated && auth.user?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileComponent;


/*

Direct State update
Example -> 
Table of data
one column is Edit button  having two functionality based on the record status
dialog box (fetch in background)
loading 

once done

dialog box will have some data (from fetch)

on ok Click
 loading , closing the dropdown (update), fetch call,  

Real Scenario

Slice/ Context -> Cart
totalItem, cartList

add to cart ACTION -> verify if already not present
Remove from cart ACTION -> verify is present -> remove
update count for an item in the cart ACTION  --> verify is present, then increase the count
Empty cart

based on action -> need to perform some logic, working with existing state and deriving the next state

reducer -> perform logic on existing state and reaching to the final next state.


dispatch -> Action,  Reducer
 */