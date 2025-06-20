import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ProductInCart = ({ product, onQuantityChange, onRemove }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(product.id, newQuantity);
    } else {
      Alert.alert(
        'Remove Item',
        'Do you want to remove this snack from your cart?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Remove', style: 'destructive', onPress: () => onRemove?.(product.id) },
        ]
      );
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price} each</Text>
        <Text style={styles.total}>Total: ₹{totalPrice}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.quantityBox}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
            <Text style={styles.quantitySymbol}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
            <Text style={styles.quantitySymbol}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove?.(product.id)}
        >
          <Text style={styles.removeText}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0fff0',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 16,
    padding: 12,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#e6ffe6',
  },
  details: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2e7d32',
  },
  price: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  total: {
    fontSize: 14,
    fontWeight: '700',
    color: '#43a047',
    marginTop: 4,
  },
  actions: {
    alignItems: 'center',
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#81c784',
  },
  quantitySymbol: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
    fontWeight: '600',
    color: '#2e7d32',
  },
  removeButton: {
    marginTop: 6,
    backgroundColor: '#f44336',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductInCart;
