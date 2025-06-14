import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CART_ACTIONS, CartContext } from '../contexts/cartContext';
import TouchableButton from './common/TouchableButton';

const Product = ({
  id,
  image,
  title,
  description,
  price,
  originalPrice,
  discount,
  tag,
  category,
  colors = [],
  onPress,
  onColorSelect,
}) => {
  const { dispatch } = React.useContext(CartContext);

  const discountPercentage = originalPrice && price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : discount;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image || 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        {discountPercentage ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discountPercentage}%</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.content}>
        {category && (
          <Text style={styles.category}>{category.toUpperCase()}</Text>
        )}
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{price}</Text>
          {originalPrice && originalPrice > price && (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          )}
        </View>

        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorDot, { backgroundColor: color.value }]}
              onPress={() => onColorSelect && onColorSelect(color)}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <TouchableButton
            title="Add to Cart"
            variant="primary"
            size="small"
            onPress={() =>
              dispatch({
                type: CART_ACTIONS.ADD_TO_CART,
                payload: {
                  id,
                  image,
                  title,
                  description,
                  price,
                  originalPrice,
                  discount,
                  tag,
                  category,
                  colors,
                },
              })
            }
            icon={<AntDesign name="shoppingcart" size={20} color="white" />}
          />
          <TouchableButton
            title="Buy Now"
            variant="secondary"
            size="small"
            onPress={() => console.log('Buy now pressed')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: '#f2f2f2',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3B30',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content: {
    padding: 12,
  },
  category: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  colorContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  colorDot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default Product;
