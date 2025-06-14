import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import Account from './Account'
import Cart from './Cart'
import CartProvider, { useCart } from "../contexts/cartContext";
import Home from './Home'

const Tab = createBottomTabNavigator()

const Authenticated = ({ navigation: authNavigation }) => {


  const { shoppingCart } = useCart();


  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerBlurEffect: 'extraLight',
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <View>
              <AntDesign name='home' size={25} style={{ color: 'black' }} />
            </View>
          )
        }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <View>
              <AntDesign name='user' size={25} style={{ color: 'black' }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <AntDesign name='dashboard' size={25} style={{ color: 'black' }} />
          )
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: shoppingCart.length,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
          tabBarIcon: () => (
            <View>
              <AntDesign
                name='shoppingcart'
                size={25}
                style={{ color: 'black' }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default Authenticated