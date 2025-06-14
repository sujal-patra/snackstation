import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

const ProductInCart = ({
    product,
    onQuantityChange,
    onRemove,
}) => {
    const [quantity, setQuantity] = useState(product.quantity || 1);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange?.(product.id, newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange?.(product.id, newQuantity);
        } else {
            // Show confirmation before removing item
            Alert.alert(
                'Remove Item',
                'Do you want to remove this item from cart?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Remove', style: 'destructive', onPress: () => onRemove?.(product.id) },
                ]
            );
        }
    };

    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.productImage} />

            <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                    {product.title}
                </Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
            </View>

            <View style={styles.quantityContainer}>
                <TouchableOpacity
                    style={[styles.quantityButton, styles.decrementButton]}
                    onPress={handleDecrement}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <View style={styles.quantityDisplay}>
                    <Text style={styles.quantityText}>{quantity}</Text>
                </View>

                <TouchableOpacity
                    style={[styles.quantityButton, styles.incrementButton]}
                    onPress={handleIncrement}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => onRemove?.(product.id)}
                activeOpacity={0.7}
            >
                <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
    },
    productInfo: {
        flex: 1,
        marginLeft: 16,
        marginRight: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2196F3',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        marginRight: 8,
    },
    quantityButton: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    decrementButton: {
        backgroundColor: '#ff6b6b',
    },
    incrementButton: {
        backgroundColor: '#51cf66',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    quantityDisplay: {
        minWidth: 40,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        marginHorizontal: 2,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    removeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#ff4757',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default ProductInCart;