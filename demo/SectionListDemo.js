import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { products } from "../data";
import App from "../App";
import AuthProvider from "../contexts/authContext";
import ProfileComponent from "./ProfileComponent";

const DATA = [
  {
    id: 1,
    title: "A",
    data: ["Apple", "Avocado"]
  },
  {
    id: 2,
    title: "B",
    data: ["Banana", "Blueberry", "Blackberry"]
  },
  {
    id: 3,
    title: "C",
    data: ["Cherry", "Coconut", "Cranberry"]
  },
  {
    id: 4,
    title: "D",
    data: ["Date", "Dragonfruit"]
  },
  {
    id: 5,
    title: "E",
    data: ["Elderberry"]
  }
];

const SectionListDemo = () => {
  return (
    <AuthProvider>
      <View>
        <ProfileComponent />
        <SectionList
          sections={DATA}
          keyExtractor={item => item.title}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>
                  {" "}{item}{" "}
                </Text>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) =>
            <Text style={styles.header}>
              {title}
            </Text>}
          renderSectionFooter={section => {
            return <Text>===============</Text>;
          }}
        />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30
  }
});

export default SectionListDemo;

