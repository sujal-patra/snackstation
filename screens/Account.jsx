import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
  ScrollView, SafeAreaView, Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../contexts/authContext';
import { useNavigation } from '@react-navigation/native';

export default function AccountSettings() {
  const { auth, logout } = useAuth();
  const navigation = useNavigation();
  const { user } = auth;

  const [profileImage, setProfileImage] = useState(
    'https://wallpapers-clan.com/wp-content/uploads/2022/08/zoro-pfp-8.jpg'
  );

  const handleEditPhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Denied", "Allow access to your photo library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const confirmLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          logout();
          navigation.replace('Login');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Account</Text>
        </View>

        <View style={styles.profileSection}>
          <TouchableOpacity onPress={handleEditPhoto}>
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          </TouchableOpacity>
          <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        <View style={styles.options}>
          <Option title="📄  Profile Info" onPress={() => Alert.alert('Profile Info')} />
          <Option title="🛒  My Orders" onPress={() => Alert.alert('Orders')} />
          <Option title="💳  Transactions" onPress={() => Alert.alert('Transactions')} />
          <Option title="⚙️  Settings" onPress={() => Alert.alert('Settings')} />
          <Option title="🚪  Logout" isLogout onPress={confirmLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Option = ({ title, onPress, isLogout }) => (
  <TouchableOpacity
    style={[styles.option, isLogout && styles.logoutOption]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.optionText, isLogout && styles.logoutText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 24,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    color: '#777',
    fontSize: 14,
    marginTop: 4,
  },
  options: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  logoutOption: {
    backgroundColor: '#ffe6e6',
  },
  logoutText: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});
