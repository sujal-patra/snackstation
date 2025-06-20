import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Product from './Product';
import { useNavigation } from '@react-navigation/native';

const ProductList = ({ data }) => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('Details', { product });
  };

  const handleColorSelect = (color) => {
    console.log('Color selected:', color.name);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.productWrapper}>
          <Product
            {...{
              id: item.id,
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              originalPrice: item.originalPrice || item.price,
              discount: item.discount,
              tag: item.tag || item.category,
              category: item.category,
              colors: [
                { name: 'Green', value: '#4CAF50' },
                { name: 'Orange', value: '#FF9800' },
                { name: 'Red', value: '#F44336' },
                { name: 'Blue', value: '#2196F3' },
              ],
            }}
            onPress={() => handleProductPress(item)}
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
    paddingHorizontal: 12,
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 30,
  },
});

export default ProductList;
