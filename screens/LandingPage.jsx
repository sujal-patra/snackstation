import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
import { AuthContext } from '../contexts/authContext';
import ProductList from '../components/ProductList';
import { getProductList } from '../services/productService';

const LandingPage = ({ navigation: homeNavigation }) => {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _fetchProductData = async () => {
      try {
        const { products } = await getProductList();
        setData(products || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    _fetchProductData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/263/263115.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Explore Products</Text>
      </View>

      <View style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6a1b9a" />
            <Text style={styles.loadingText}>Loading products...</Text>
          </View>
        ) : (
          <ProductList data={data} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    padding: 20,
    backgroundColor: '#6a1b9a',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
    borderRadius: 6,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#444',
    fontSize: 16,
  },
});

export default LandingPage;
