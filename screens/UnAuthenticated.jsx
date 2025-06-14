import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import Authenticated from './Authenticated'
import AuthProvider from '../contexts/authContext'
import CartProvider from '../contexts/cartContext'
import { SESSION_KEYS } from '../constants/appContants'

const Stack = createNativeStackNavigator()

const UnAuthenticated = () => {
  useEffect(() => {
    console.log("Unauthenticated component loaded.");

    const restoreAuthData = async (key, value) => {
      try {
        const result = await AsyncStorage.getItem(SESSION_KEYS.AUTH);
        console.log("From Async storage", result);
        
      } catch (e) {
        console.error("No Session or error restoring the session.");
      }
    };

  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerTransparent: true,
                headerBlurEffect: 'extraLight',
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 24
                },
                headerBackVisible: false
              }}
              name='Login'
              component={LoginScreen}
            />
            <Stack.Screen name='Signup' component={SignUpScreen} />
            <Stack.Screen
              options={{
                headerShown: false
              }}
              name='Authenticated'
              component={Authenticated}
            />
          </Stack.Navigator>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default UnAuthenticated


