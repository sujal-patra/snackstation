import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useAuth } from '../contexts/authContext';
import { useNavigation } from '@react-navigation/native';
import accountStyles from '../styles/accountStyles';


const AccountSettings = () => {
    const { auth, logout } = useAuth();
    const navigation = useNavigation()

    const { user } = auth;

    const handleProfilePress = () => {
        Alert.alert('Profile', 'Navigate to Profile Settings');
    };

    const handleOrderPress = () => {
        Alert.alert('Orders', 'Navigate to My Orders');
    };

    const handleTransactionPress = () => {
        Alert.alert('Transactions', 'Navigate to Transaction History');
    };

    const handleLogoutPress = () => {
        console.log(navigation);
        logout()
        navigation.replace("Login");

        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Logout', style: 'destructive', onPress: () => console.log('User logged out') }
            ]
        );
    };

    const handleEditPhoto = () => {
        Alert.alert('Edit Photo', 'Select photo from gallery or camera');
    };

    const MenuButton = ({ icon, title, onPress, isLogout = false, showArrow = true }) => (
        <TouchableOpacity
            style={[accountStyles.menuButton, isLogout && accountStyles.logoutButton]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={accountStyles.menuButtonLeft}>
                <View style={[accountStyles.iconContainer, isLogout && accountStyles.logoutIconContainer]}>
                    <Text style={[accountStyles.iconText, isLogout && accountStyles.logoutIconText]}>{icon}</Text>
                </View>
                <Text style={[accountStyles.menuButtonText, isLogout && accountStyles.logoutText]}>
                    {title}
                </Text>
            </View>
            {showArrow && (
                <Text style={[accountStyles.arrowText, isLogout && accountStyles.logoutArrowText]}>›</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={accountStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={accountStyles.header}>
                    <Text style={accountStyles.headerTitle}>Account Settings</Text>
                </View>

                {/* Profile Photo Section */}
                <View style={accountStyles.photoSection}>
                    <View style={accountStyles.photoContainer}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
                            }}
                            style={accountStyles.profilePhoto}
                        />
                        <TouchableOpacity
                            style={accountStyles.editPhotoButton}
                            onPress={handleEditPhoto}
                            activeOpacity={0.8}
                        >
                            <Text style={accountStyles.editPhotoText}>📷</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={accountStyles.userName}>{`${user?.firstName} ${user?.lastName}`}</Text>
                    <Text style={accountStyles.userEmail}>{user?.email}</Text>
                    <View style={accountStyles.membershipBadge}>
                        <Text style={accountStyles.membershipText}>Premium Member</Text>
                    </View>
                </View>

                {/* Menu Buttons Section */}
                <View style={accountStyles.menuSection}>
                    <Text style={accountStyles.sectionTitle}>Account</Text>

                    <View style={accountStyles.menuContainer}>
                        <MenuButton
                            icon="👤"
                            title="Profile Settings"
                            onPress={handleProfilePress}
                        />

                        <View style={accountStyles.separator} />

                        <MenuButton
                            icon="🛍️"
                            title="My Orders"
                            onPress={handleOrderPress}
                        />

                        <View style={accountStyles.separator} />

                        <MenuButton
                            icon="💳"
                            title="Transaction History"
                            onPress={handleTransactionPress}
                        />
                    </View>

                    <View style={accountStyles.logoutSection}>
                        <MenuButton
                            icon="🚪"
                            title="Logout"
                            onPress={handleLogoutPress}
                            isLogout={true}
                            showArrow={false}
                        />
                    </View>
                </View>

                {/* Bottom Spacing */}
                <View style={accountStyles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
};



export default AccountSettings;