import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const initialPantryItems = [
  { id: 1, name: 'Brown Rice', quantity: '1 kg' },
  { id: 2, name: 'Almond Butter', quantity: '500 g' },
  { id: 3, name: 'Chickpeas', quantity: '2 cans' },
  { id: 4, name: 'Whole Wheat Pasta', quantity: '500 g' },
  { id: 5, name: 'Quinoa', quantity: '1 kg' },
  { id: 6, name: 'Oats (Rolled)', quantity: '750 g' },
  { id: 7, name: 'Red Lentils (Masoor Dal)', quantity: '1 kg' },
  { id: 8, name: 'Toor Dal', quantity: '1 kg' },
  { id: 9, name: 'Canned Tomatoes', quantity: '3 cans' },
  { id: 10, name: 'Peanut Butter', quantity: '400 g' },
  { id: 11, name: 'Honey', quantity: '250 ml' },
  { id: 12, name: 'Cooking Oil (Sunflower)', quantity: '1 L' },
  { id: 13, name: 'Olive Oil (Extra Virgin)', quantity: '500 ml' },
  { id: 14, name: 'Salt', quantity: '1 kg' },
  { id: 15, name: 'Sugar (Brown)', quantity: '500 g' },
  { id: 16, name: 'Black Pepper (Whole)', quantity: '100 g' },
  { id: 17, name: 'Turmeric Powder', quantity: '100 g' },
  { id: 18, name: 'Cumin Seeds', quantity: '150 g' },
  { id: 19, name: 'Green Tea Bags', quantity: '20 bags' },
  { id: 20, name: 'Instant Coffee', quantity: '100 g' },
  { id: 21, name: 'Bread Crumbs', quantity: '250 g' },
  { id: 22, name: 'Corn Flour', quantity: '500 g' },
  { id: 23, name: 'Dry Yeast', quantity: '1 packet' },
  { id: 24, name: 'Tinned Coconut Milk', quantity: '2 cans' },
  { id: 25, name: 'Dark Chocolate Chips', quantity: '300 g' }
];


const PantryScreen = () => {
  const [pantryItems, setPantryItems] = useState(initialPantryItems);

  const updateQuantity = (id, newQuantity) => {
    setPantryItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const deleteItem = (id) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () =>
          setPantryItems(prev => prev.filter(item => item.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TextInput
          style={styles.input}
          value={item.quantity}
          onChangeText={(text) => updateQuantity(item.id, text)}
        />
      </View>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Pantry</Text>
      {pantryItems.length === 0 ? (
        <Text style={styles.emptyText}>Your pantry is empty.</Text>
      ) : (
        <FlatList
          data={pantryItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default PantryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fff4',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: 12,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  itemLeft: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 6,
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 50,
  },
});
