import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Account from './Account';
import Cart from './Cart';
import Home from './Home';
import WishlistScreen from '../screens/WishlistScreen';
import { useCart } from '../contexts/cartContext';
import RecipeScreen from './RecipeScreen';
import RecipeStackNavigator from '../components/RecipeStackNavigator';

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  const { shoppingCart } = useCart();

  return (
    
    <Tab.Navigator>
     

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="home" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
  name="Recipes"
  component={RecipeStackNavigator}
  options={{
    tabBarLabel: 'Recipes',
    tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
    tabBarIcon: () => (
      <AntDesign name="book" size={25} color="black" /> 
    ),
  }}
/>

      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="heart" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Pantry"
        component={Dashboard}
        options={{
          tabBarLabel: 'Pantry',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="dashboard" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: shoppingCart.length,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name="user" size={25} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Authenticated;
