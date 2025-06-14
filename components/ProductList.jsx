import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Product from './Product';
import { useNavigation } from '@react-navigation/native';

const ProductList = ({ data: products }) => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('Details', { product });
  };

  const handleColorSelect = (color) => {
    console.log('Color selected:', color);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: {
        id,
        brand,
        image,
        title,
        description,
        price,
        discount,
        category,
        color,
      } }) => (
        <View key={id} style={styles.productWrapper}>
          <Product
            {...{
              id,
              image,
              title,
              description,
              price,
              originalPrice: price,
              discount,
              tag: brand,
              category,
              colors: [
                { name: 'Black', value: '#000000' },
                { name: 'White', value: '#ffffff' },
                { name: color || 'Red', value: '#ff0000' },
                { name: 'Blue', value: '#0066cc' },
              ],
            }}
            onPress={() =>
              handleProductPress({
                id,
                images: [image],
                title,
                description,
                price,
                originalPrice: price,
                discount,
                tag: brand,
                category,
              })
            }
            onColorSelect={handleColorSelect}
          />
        </View>
      )}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 20,
    paddingTop: 10,
  },
});

export default ProductList;
