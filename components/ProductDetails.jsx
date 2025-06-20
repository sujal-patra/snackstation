import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
  StyleSheet, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductDetails = ({ route }) => {
  const { product } = route.params || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const renderImageCarousel = () => (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentImageIndex(index);
      }}
      style={styles.carousel}
    >
      {product.images?.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </ScrollView>
  );

  return (
    <ScrollView style={styles.container}>
      {renderImageCarousel()}
      <View style={styles.indicators}>
        {product.images?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentImageIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product.price}</Text>
          {product.discount && (
            <Text style={styles.discount}>({product.discount}% OFF)</Text>
          )}
        </View>

        <Text style={styles.category}>Category: {product.category}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Pantry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buyNow]}>
          <Text style={[styles.buttonText, { color: '#fff' }]}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  carousel: { height: 300, backgroundColor: '#f9f9f9' },
  image: { width, height: 300, resizeMode: 'cover' },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8, height: 8, borderRadius: 4,
    backgroundColor: '#ccc', margin: 5,
  },
  activeDot: { backgroundColor: '#4CAF50' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  description: { fontSize: 16, color: '#666', marginTop: 10 },
  priceContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#4CAF50' },
  discount: { marginLeft: 10, color: 'red', fontWeight: 'bold' },
  category: { marginTop: 10, fontStyle: 'italic', color: '#777' },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyNow: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetails;
