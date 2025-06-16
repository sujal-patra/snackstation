import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList, 
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductDetails = ({ route }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { product } = route.params || {}; 

    
    const sampleProduct = {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 1199,
        originalPrice: 1299,
        discount: 8,
        rating: 4.5,
        reviewCount: 2847,
        images: [
            'https://via.placeholder.com/400x400/007acc/ffffff?text=Product+Image+1',
            'https://via.placeholder.com/400x400/28a745/ffffff?text=Product+Image+2',
            'https://via.placeholder.com/400x400/dc3545/ffffff?text=Product+Image+3',
        ],
        description: 'Experience the pinnacle of smartphone technology with advanced features and stunning design, featuring a powerful A17 Pro chip and an incredible camera system. This device offers unparalleled performance and a premium user experience.',
        features: [
            'A17 Pro chip with 6-core GPU for blazing-fast performance',
            'ProRAW and ProRes video recording for professional-grade videography',
            'Durable titanium design with a customizable Action Button',
            'Advanced 48MP Main camera system for stunning photos',
            'Exceptional battery life with up to 29 hours of video playback',
            'Next-generation 5G connectivity for ultra-fast downloads and streaming',
            'Ceramic Shield front cover, tougher than any smartphone glass',
        ],
        specifications: {
            'Display': '6.7-inch Super Retina XDR with ProMotion',
            'Processor': 'A17 Pro Bionic chip',
            'Storage': '256GB, 512GB, 1TB options',
            'Rear Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
            'Front Camera': '12MP TrueDepth Camera',
            'Battery': 'Built-in rechargeable lithium-ion battery (approx. 4441 mAh)',
            'Operating System': 'iOS 17',
            'Water Resistance': 'IP68 (maximum depth of 6 meters up to 30 minutes)',
            'Dimensions': '159.9 x 76.7 x 8.25 mm',
            'Weight': '221g',
            'Colors': 'Natural Titanium, Blue Titanium, White Titanium, Black Titanium',
        },
        bankOffers: [
            {
                bank: 'HDFC Bank',
                offer: '10% Instant Discount',
                details: 'Up to ₹1,500 discount on HDFC Bank Credit Card EMI transactions. Minimum purchase ₹10,000.',
                code: 'HDFC10',
            },
            {
                bank: 'SBI Card',
                offer: '5% Cashback',
                details: 'Get 5% cashback on all SBI Credit Card transactions. Maximum cashback ₹1,000.',
                code: 'SBI5',
            },
            {
                bank: 'ICICI Bank',
                offer: 'No Cost EMI',
                details: 'Avail No Cost EMI for 3, 6, or 9 months on ICICI Bank Credit Cards.',
                code: 'ICICIEMI',
            },
            {
                bank: 'Axis Bank',
                offer: '₹1,000 Off',
                details: 'Flat ₹1,000 discount on Axis Bank Debit and Credit Card transactions. Minimum purchase ₹5,000.',
                code: 'AXIS1000',
            },
        ],
        reviews: [
            {
                id: 1,
                user: 'John D.',
                rating: 5,
                comment: 'Excellent phone with amazing camera quality! The performance is top-notch, and the new Action Button is super handy. Highly recommend it!',
                date: '2024-01-15',
                helpful: 24,
            },
            {
                id: 2,
                user: 'Sarah M.',
                rating: 4,
                comment: 'Great performance but battery could be better for heavy usage. Design is stunning, and the display is incredibly vibrant. Overall, a solid upgrade.',
                date: '2024-01-10',
                helpful: 18,
            },
            {
                id: 3,
                user: 'Mike R.',
                rating: 5,
                comment: 'Premium build quality and smooth performance. iOS 17 runs flawlessly. The titanium finish feels great in hand.',
                date: '2024-01-08',
                helpful: 31,
            },
            {
                id: 4,
                user: 'Jessica L.',
                rating: 4,
                comment: 'Good phone, but a bit pricey. The camera features are impressive, especially the low-light performance. Face ID is fast and reliable.',
                date: '2023-12-28',
                helpful: 12,
            },
        ],
    };

   
    const productData = { ...sampleProduct, ...product };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Text key={i} style={styles.star}>★</Text>);
        }
        if (hasHalfStar) {
            stars.push(<Text key="half" style={styles.halfStar}>★</Text>); 
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Text key={i} style={styles.emptyStar}>☆</Text>);
        }
        return stars;
    };

    const renderImageCarousel = () => (
        <View style={styles.imageCarouselContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentImageIndex(index);
                }}
                style={styles.imageScrollView}
            >
                {productData.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.productCarouselImage} />
                ))}
            </ScrollView>
            <View style={styles.imageIndicators}>
                {productData.images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentImageIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>
        </View>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>{productData.description}</Text>

                        <Text style={styles.sectionTitle}>Key Features</Text>
                        {productData.features.map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.featureText}>{feature}</Text>
                            </View>
                        ))}
                    </View>
                );

            case 'specifications':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Technical Specifications</Text>
                        {Object.entries(productData.specifications).map(([key, value]) => (
                            <View key={key} style={styles.specRow}>
                                <Text style={styles.specKey}>{key}</Text>
                                <Text style={styles.specValue}>{value}</Text>
                            </View>
                        ))}
                    </View>
                );

            case 'reviews':
                return (
                    <View style={styles.tabContent}>
                        <View style={styles.reviewSummary}>
                            <Text style={styles.sectionTitle}>Customer Reviews</Text>
                            <View style={styles.ratingOverview}>
                                <Text style={styles.overallRating}>{productData.rating}</Text>
                                <View style={styles.starsContainer}>
                                    {renderStars(productData.rating)}
                                </View>
                                <Text style={styles.reviewCount}>({productData.reviewCount} reviews)</Text>
                            </View>
                        </View>

                        {productData.reviews.map((review) => (
                            <View key={review.id} style={styles.reviewItem}>
                                <View style={styles.reviewHeader}>
                                    <Text style={styles.reviewUser}>{review.user}</Text>
                                    <View style={styles.reviewStars}>
                                        {renderStars(review.rating)}
                                    </View>
                                </View>
                                <Text style={styles.reviewComment}>{review.comment}</Text>
                                <View style={styles.reviewFooter}>
                                    <Text style={styles.reviewDate}>{review.date}</Text>
                                    <Text style={styles.helpful}>👍 {review.helpful} helpful</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                );

            case 'offers':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Bank Offers</Text>
                        {productData.bankOffers.map((offer, index) => (
                            <View key={index} style={styles.offerCard}>
                                <View style={styles.offerHeader}>
                                    <Text style={styles.bankName}>{offer.bank}</Text>
                                    <Text style={styles.offerTitle}>{offer.offer}</Text>
                                </View>
                                <Text style={styles.offerDetails}>{offer.details}</Text>
                                <Text style={styles.offerCode}>Code: {offer.code}</Text>
                            </View>
                        ))}
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Image Carousel */}
            {renderImageCarousel()}

            {/* Product Info */}
            <View style={styles.productInfo}>
                <Text style={styles.brand}>{productData.brand}</Text>
                <Text style={styles.productName}>{productData.name}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <View style={styles.starsContainer}>
                        {renderStars(productData.rating)}
                    </View>
                    <Text style={styles.ratingText}>
                        {productData.rating} ({productData.reviewCount} reviews)
                    </Text>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${productData.price}</Text>
                    {productData.originalPrice && (
                        <Text style={styles.originalPrice}>${productData.originalPrice}</Text>
                    )}
                    {productData.discount && (
                        <Text style={styles.discount}>{productData.discount}% OFF</Text>
                    )}
                </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                {['overview', 'specifications', 'reviews', 'offers'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNowButton}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', 
    },
    imageCarouselContainer: {
        height: 320, 
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10,
    },
    imageScrollView: {
        flex: 1,
    },
    productCarouselImage: {
        width: width,
        height: '100%',
        resizeMode: 'contain', 
        backgroundColor: '#FFFFFF', 
    },
    imageIndicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#007ACC',
    },
    activeIndicator: {
        backgroundColor: '#007ACC',
        transform: [{ scale: 1.2 }],
    },
    productInfo: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 15,
        marginTop: -30, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    brand: {
        fontSize: 15,
        color: '#6A6A6A',
        marginBottom: 5,
        fontFamily: 'Avenir-Medium', 
    },
    productName: {
        fontSize: 26,
        fontWeight: '700',
        color: '#333333',
        marginBottom: 10,
        fontFamily: 'Avenir-Heavy',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    star: {
        color: '#FFC107', 
        fontSize: 20,
    },
    halfStar: {
        color: '#FFC107',
        fontSize: 20,
        opacity: 0.6, 
    },
    emptyStar: {
        color: '#E0E0E0',
        fontSize: 20,
    },
    ratingText: {
        fontSize: 15,
        color: '#6A6A6A',
        fontFamily: 'Avenir-Medium',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 15,
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007ACC',
        marginRight: 15,
        fontFamily: 'Avenir-Heavy',
    },
    originalPrice: {
        fontSize: 19,
        color: '#A0A0A0',
        textDecorationLine: 'line-through',
        marginRight: 10,
        fontFamily: 'Avenir-Medium',
    },
    discount: {
        fontSize: 16,
        color: '#28A745',
        fontWeight: 'bold',
        backgroundColor: '#E6F4EA', 
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 5,
        overflow: 'hidden', 
        fontFamily: 'Avenir-Medium',
    },
    tabsContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 15,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
        borderBottomWidth: 3, 
        borderBottomColor: 'transparent', 
    },
    activeTab: {
        borderBottomColor: '#007ACC', 
    },
    tabText: {
        fontSize: 15,
        color: '#888888',
        fontWeight: '600',
        fontFamily: 'Avenir-Medium',
    },
    activeTabText: {
        color: '#007ACC',
        fontWeight: 'bold',
    },
    tabContent: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 15,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
        marginBottom: 10, 
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
        fontFamily: 'Avenir-Heavy',
    },
    description: {
        fontSize: 16,
        color: '#555555',
        lineHeight: 25,
        marginBottom: 20,
        fontFamily: 'Avenir-Book',
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 16,
        color: '#007ACC',
        marginRight: 10,
        marginTop: 1, 
        fontWeight: 'bold',
    },
    featureText: {
        fontSize: 16,
        color: '#555555',
        flex: 1,
        fontFamily: 'Avenir-Book',
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        alignItems: 'center',
    },
    specKey: {
        fontSize: 16,
        color: '#555555',
        fontWeight: '600',
        flex: 0.45, 
        fontFamily: 'Avenir-Medium',
    },
    specValue: {
        fontSize: 16,
        color: '#777777',
        flex: 0.55, 
        textAlign: 'right',
        fontFamily: 'Avenir-Book',
    },
    reviewSummary: {
        marginBottom: 25,
    },
    ratingOverview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    overallRating: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 15,
        fontFamily: 'Avenir-Heavy',
    },
    reviewCount: {
        fontSize: 15,
        color: '#6A6A6A',
        marginLeft: 10,
        fontFamily: 'Avenir-Medium',
    },
    reviewItem: {
        backgroundColor: '#F8F9FA',
        padding: 18,
        borderRadius: 10,
        marginBottom: 15,
        borderLeftWidth: 5, // A subtle left border
        borderLeftColor: '#007ACC',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    reviewUser: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        fontFamily: 'Avenir-Medium',
    },
    reviewStars: {
        flexDirection: 'row',
    },
    reviewComment: {
        fontSize: 15,
        color: '#555555',
        lineHeight: 22,
        marginBottom: 10,
        fontFamily: 'Avenir-Book',
    },
    reviewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    reviewDate: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Avenir-Light',
    },
    helpful: {
        fontSize: 13,
        color: '#28A745',
        fontWeight: '600',
        fontFamily: 'Avenir-Medium',
    },
    offerCard: {
        backgroundColor: '#E8F5E9',
        padding: 18,
        borderRadius: 10,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#28A745', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    offerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    bankName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        fontFamily: 'Avenir-Heavy',
    },
    offerTitle: {
        fontSize: 15,
        color: '#1A5F2D', 
        fontWeight: 'bold',
        fontFamily: 'Avenir-Medium',
    },
    offerDetails: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 8,
        fontFamily: 'Avenir-Book',
    },
    offerCode: {
        fontSize: 14,
        color: '#007ACC',
        fontWeight: 'bold',
        fontFamily: 'Avenir-Medium',
        backgroundColor: '#EBF5FF', 
        alignSelf: 'flex-start', 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    actionButtons: {
        flexDirection: 'row',
        padding: 20,
        gap: 15, 
        backgroundColor: '#FFFFFF', 
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 }, 
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 5,
    },
    addToCartButton: {
        flex: 1,
        backgroundColor: '#E0E0E0', 
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C0C0C0', 
    },
    addToCartText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#555555', 
        fontFamily: 'Avenir-Heavy',
    },
    buyNowButton: {
        flex: 1,
        backgroundColor: '#007ACC', 
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#007ACC', 
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    buyNowText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Avenir-Heavy',
    },
});

export default ProductDetails;