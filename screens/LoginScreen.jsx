import React, { useContext, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from 'react-native';
import TextInputComponent from '../components/common/TextInputComponent';
import loginScreenStyles from '../styles/loginScreenStyles';
import { authenticateUser } from '../services/authService';
import { AuthContext } from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SESSION_KEYS } from '../constants/appContants';

const LoginScreen = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const [userLoginCredential, setUserLoginCredential] = useState({
    username: 'emilys',
    password: 'emilyspass',
  });

  const [rememberMe, setRememberMe] = useState(false); 
  const handleLogin = async () => {
    try {
      const result = await authenticateUser(userLoginCredential);
      if (result && result.accessToken) {
        const { accessToken, refreshToken, ...user } = result;
        if (rememberMe) {
          await storeAuthData(SESSION_KEYS.AUTH, JSON.stringify({ accessToken, refreshToken, user }));
        }
        setAuth({
          isAuthenticated: Boolean(result.accessToken),
          user,
          accessToken,
          refreshToken,
        });
        navigation.navigate('Authenticated');
      }
    } catch (error) {
      console.log('ERROR in Authentication...', error.message);
    }
  };

  const storeAuthData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error('Error saving auth data:', e);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://as1.ftcdn.net/jpg/03/32/12/28/1000_F_332122807_niegnafTOdmqwRS2FL1kF8hmYusF5CHi.jpg' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={loginScreenStyles.scrollContainer}>
          <View style={loginScreenStyles.secondContainer}>
            <Image
              resizeMode="cover"
              source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/585/210/non_2x/cute-burger-lifting-dumbbell-cartoon-icon-illustration-food-healthy-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg' }}
              style={loginScreenStyles.logoImage}
            />
          </View>

          <View style={loginScreenStyles.loginContainer}>
            <TextInputComponent
              type="email"
              value={userLoginCredential.username}
              placeholder="Enter your email"
              onChange={(text) =>
                setUserLoginCredential((prev) => ({ ...prev, username: text }))
              }
            />
            <TextInputComponent
              type="password"
              value={userLoginCredential.password}
              placeholder="Enter your password"
              onChange={(text) =>
                setUserLoginCredential((prev) => ({ ...prev, password: text }))
              }
            />

            <TouchableHighlight
              style={loginScreenStyles.loginButton}
              onPress={handleLogin}
              underlayColor="#6a1b9a"
            >
              <View style={loginScreenStyles.loginButtonInner}>
                <Text style={loginScreenStyles.loginButtonText}>Login</Text>
              </View>
            </TouchableHighlight>

            {/* Updated Remember Me Row */}
            <View style={styles.infoRow}>
              <View style={styles.rememberMeContainer}>
                <Switch
                  value={rememberMe}
                  onValueChange={setRememberMe}
                />
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>
              <Text style={loginScreenStyles.infoText}>Forgot Password?</Text>
            </View>

            <Pressable
              onPress={() => navigation.navigate('Signup')}
              style={loginScreenStyles.signupLink}
            >
              <Text style={loginScreenStyles.signupText}>
                Don't have an account? Sign Up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  infoRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
  },
});

export default LoginScreen;
