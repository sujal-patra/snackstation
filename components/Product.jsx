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
import { useWishlist } from '../contexts/wishlistContext';

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
  const { toggleWishlist, isFavorite } = useWishlist();

  const discountPercentage =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : discount;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image || 'https://via.placeholder.com/150' }}
          style={styles.image}
        />

        <TouchableOpacity
          onPress={() => toggleWishlist({ id, image, title, price })}
          style={styles.heartIcon}
        >
          <AntDesign
            name={isFavorite(id) ? 'heart' : 'hearto'}
            size={22}
            color={isFavorite(id) ? '#E91E63' : '#999'}
          />
        </TouchableOpacity>

        {discountPercentage ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discountPercentage}%</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{price}</Text>
          {originalPrice && originalPrice > price && (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          )}
        </View>

        <View style={styles.buttons}>
          <TouchableButton
            title="Add"
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
            icon={<AntDesign name="plus" size={16} color="#fff" />}
          />
          <TouchableButton
            title="Buy"
            variant="secondary"
            size="small"
            onPress={() => console.log('Buy Now')}
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
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    height: 160,
    backgroundColor: '#f9f9f9',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 2,
  },
  discountBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#ff7043',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#777',
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#388e3c',
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 10,
  },
});

export default Product;
