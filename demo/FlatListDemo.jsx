import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Tab = createDrawerNavigator()

const Drawer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          drawerType: 'slide',
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#003CB3',
          drawerLabelStyle: {
            color: 'white'
          },
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240
          }
        }}
        useLegacyImplementation={false}
      >
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

export default Drawer