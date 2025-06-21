import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../components/ProductDetails';
import LandingPage from './LandingPage';
import ProductReview from '../components/ProductReview';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade_from_bottom',
        contentStyle: {
          backgroundColor: '#f8f8f8',
        },
      }}
    >
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerShown: false, // Full screen landing
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{
          title: 'Product Details 🍽️',
        }}
      />
      <Stack.Screen
        name="Review"
        component={ProductReview}
        options={{
          title: 'Customer Reviews ⭐',
          presentation: 'modal', // Slide up
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
