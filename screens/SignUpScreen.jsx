import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import TextInputComponent from '../components/common/TextInputComponent';
import loginScreenStyles from '../styles/loginScreenStyles';

const SignUpScreen = ({ navigation }) => {
  const [userSignupData, setUserSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignup = () => {
    console.log('Signup Info:', userSignupData);
    // You can add actual signup logic here.
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://heas.health.vic.gov.au/wp-content/uploads/2023/03/array-of-colourful-ingredients-749x788.jpg',  }}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.85)' }}>
        <View style={loginScreenStyles.firstContainer} />
        <KeyboardAvoidingView
          style={styles.flexContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={loginScreenStyles.scrollContainer}>
            <View style={loginScreenStyles.secondContainer}>
              <Image
                resizeMode="cover"
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/022/585/210/non_2x/cute-burger-lifting-dumbbell-cartoon-icon-illustration-food-healthy-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg',
                }}
                style={loginScreenStyles.logoImage}
              />
            </View>
            <View style={loginScreenStyles.loginContainer}>
              <TextInputComponent
                type="text"
                placeholder="Enter your first name"
                value={userSignupData.firstName}
                onChange={(text) =>
                  setUserSignupData((prev) => ({ ...prev, firstName: text }))
                }
              />
              <TextInputComponent
                type="text"
                placeholder="Enter your last name"
                value={userSignupData.lastName}
                onChange={(text) =>
                  setUserSignupData((prev) => ({ ...prev, lastName: text }))
                }
              />
              <TextInputComponent
                type="email"
                placeholder="Enter your email"
                value={userSignupData.email}
                onChange={(text) =>
                  setUserSignupData((prev) => ({ ...prev, email: text }))
                }
              />
              <TextInputComponent
                type="password"
                placeholder="Enter your password"
                value={userSignupData.password}
                onChange={(text) =>
                  setUserSignupData((prev) => ({ ...prev, password: text }))
                }
              />
              <TouchableHighlight
                style={loginScreenStyles.loginButton}
                onPress={handleSignup}
                underlayColor="#6a1b9a"
              >
                <View style={loginScreenStyles.loginButtonInner}>
                  <Text style={loginScreenStyles.loginButtonText}>Sign Up</Text>
                </View>
              </TouchableHighlight>

              <Pressable
                onPress={() => navigation.navigate('Login')}
                style={loginScreenStyles.signupLink}
              >
                <Text style={loginScreenStyles.signupText}>
                  Already have an account? Log In
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 7,
  },
});

export default SignUpScreen;
