import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { useWishlist } from '../contexts/wishlistContext';
import Product from '../components/Product'; // Assumes your Product component is styled well

const WishlistScreen = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>❤️ My Wishlist</Text>
      </View>

      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/7486/7486670.png',
            }}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
          <Text style={styles.subText}>Browse and tap ❤️ to save items here!</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Product {...item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
    paddingHorizontal: 20,
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
    opacity: 0.7,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },
});
