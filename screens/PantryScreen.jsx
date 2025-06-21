import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { usePantry } from '../contexts/pantryContext'; 

const PantryScreen = () => {
  const { pantry, updateQuantity, removeFromPantry } = usePantry(); 

  const confirmDelete = (id) => {
    Alert.alert('Remove Item', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => removeFromPantry(id),
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
      <TouchableOpacity onPress={() => confirmDelete(item.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Pantry</Text>
      {pantry.length === 0 ? (
        <Text style={styles.emptyText}>Your pantry is empty.</Text>
      ) : (
        <FlatList
          data={pantry}
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
  container: { flex: 1, backgroundColor: '#f4fff4', padding: 16 },
  heading: { fontSize: 24, fontWeight: '700', color: '#4CAF50', marginBottom: 12 },
  list: { paddingBottom: 20 },
  itemContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', marginBottom: 12, padding: 12, borderRadius: 10, elevation: 2,
  },
  itemLeft: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  input: { backgroundColor: '#f0f0f0', padding: 8, borderRadius: 6, fontSize: 14 },
  emptyText: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 50 },
});
