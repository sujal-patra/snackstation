import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { products } from '../data'

const ScrollViewDemo = () => {
  return (
    <ScrollView
      style={styles.NestedscrollView}
      //   horizontal={true}
    >
      {products.map(item => (
        <View key={item.id} style={styles.NestedscrollView1}>
          <Text style={styles.NestedText}>{item.title}</Text>
          <Text style={styles.NestedText}>{item.description}</Text>
          <Text style={styles.NestedText}>{item.price}</Text>
          <Text style={styles.NestedText}>{item.category}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  NestedscrollView: {},
  NestedscrollView1: {},
  NestedText: {
    margin: 20
  }
})

export default ScrollViewDemo