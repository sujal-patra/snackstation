import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  scrollContainer: {
    paddingVertical: 150, 
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  secondContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  loginContainer: {
    width: width * 0.9,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginTop: 20 
  },
  loginButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    marginTop: 20,
    overflow: 'hidden',
  },
  loginButtonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  infoText: {
    fontSize: 14,
    color: '#444'
  },
  signupLink: {
    marginTop: 25,
    alignItems: 'center'
  },
  signupText: {
    fontSize: 14,
    color: '#0000ff'
  }
});
