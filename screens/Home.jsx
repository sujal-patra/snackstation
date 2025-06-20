import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../components/ProductDetails';
import LandingPage from './LandingPage';
import ProductReview from '../components/ProductReview';
import { products } from '../data'; 

const recommended = products.filter(p => p.category === 'audio').slice(0, 5);


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a1b9a',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 22,
          fontWeight: '600',
        },
        headerTintColor: '#fff',
        animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade_from_bottom',
        contentStyle: {
          backgroundColor: '#f3e5f5',
        },
      }}
    >
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{
          title: 'Product Details',
        }}
      />
      <Stack.Screen
        name="Review"
        component={ProductReview}
        options={{
          title: 'Product Reviews',
          presentation: 'modal', 
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Home;
