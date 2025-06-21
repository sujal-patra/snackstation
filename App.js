import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Authenticated from './screens/Authenticated';

import { AuthProvider, useAuth } from './contexts/authContext';
import { WishlistProvider } from './contexts/wishlistContext';
import { CartProvider } from './contexts/cartContext';
import { PantryProvider } from './contexts/pantryContext'; 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { auth } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {auth.isAuthenticated ? (
        <Stack.Screen name="Authenticated" component={Authenticated} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <PantryProvider> 
            <NavigationContainer>
              <StatusBar style="auto" />
              <AppNavigator />
            </NavigationContainer>
          </PantryProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
