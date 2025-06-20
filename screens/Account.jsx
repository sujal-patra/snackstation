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
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
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
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account</Text>
        </View>

        <View style={styles.profileSection}>
          <TouchableOpacity onPress={handleEditPhoto}>
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          </TouchableOpacity>
          <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        <View style={styles.options}>
          <Option title="📄 Profile Info" onPress={() => Alert.alert('Profile Info')} />
          <Option title="🛒 My Orders" onPress={() => Alert.alert('Orders')} />
          <Option title="💳 Transactions" onPress={() => Alert.alert('Transactions')} />
          <Option title="🚪 Logout" isLogout onPress={confirmLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Option = ({ title, onPress, isLogout }) => (
  <TouchableOpacity
    style={[styles.option, isLogout && styles.logoutOption]}
    onPress={onPress}
  >
    <Text style={[styles.optionText, isLogout && styles.logoutText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    color: '#555',
    marginBottom: 10,
  },
  options: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  logoutOption: {
    backgroundColor: '#fff0f0',
  },
  logoutText: {
    color: '#e53935',
    fontWeight: 'bold',
  },
});
