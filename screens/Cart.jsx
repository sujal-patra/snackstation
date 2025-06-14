import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CART_ACTIONS, useCart } from '../contexts/cartContext';
import ProductInCart from '../components/ProductInCart';

const Cart = () => {
  const { shoppingCart, dispatch } = useCart();
  const noOfItemsInCart = shoppingCart.length;
  return (
    <>
      <FlatList
        data={shoppingCart}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id,
          brand,
          image,
          title,
          description,
          price,
          discount,
          category,
          color, } }) => {
          return (<View key={id} style={styles.NestedscrollView1}>
            <ProductInCart
              product={{
                id,
                brand,
                image,
                title,
                description,
                price,
                discount,
                category,
                color,
                quantity: 2
              }}
              onQuantityChange={(id, qty) => console.log('Quantity changed:', id, qty)}
              onRemove={(id) => {
                console.log('Remove product:', id);
                dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id } })
              }}
            />
          </View>)
        }}
      />
    </>

  )
}

const styles = StyleSheet.create({})

export default Cart