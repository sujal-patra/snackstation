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


