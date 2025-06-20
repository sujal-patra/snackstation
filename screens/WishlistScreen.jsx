import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useWishlist } from '../contexts/wishlistContext';
import Product from '../components/Product';

const WishlistScreen = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Wishlist</Text>
      {wishlist.length === 0 ? (
        <Text style={styles.empty}>No items in wishlist.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product {...item} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  empty: { textAlign: 'center', marginTop: 20, color: '#999' },
});

export default WishlistScreen;
