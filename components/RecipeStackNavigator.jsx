
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

const RecipeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RecipeStackNavigator;
