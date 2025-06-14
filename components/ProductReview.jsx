import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductReview = ({ route }) => {
    useEffect(() => {
        
        console.log(route.params);
        
    }, []);
    return (
        <View>
            <Text>Review</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductReview;