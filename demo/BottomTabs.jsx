import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          options={{
            headerTransparent: true,
            headerBlurEffect: 'extraLight',
            headerTitleStyle: {
              color: 'white',
              fontSize: 24
            }
          }}
          name='Login'
          component={LoginScreen}
        />
        <Tab.Screen name='Signup' component={SignUpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default BottomTabs