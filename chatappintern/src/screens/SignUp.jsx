import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup() {
    const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#FFA800', '#F8DBA3', '#F5F5F5']}
      style={styles.container}
    >
       <StatusBar barStyle="light" backgroundColor={'#FFA800'}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Alpha Stubs</Text>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subText}>
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="ex: jon smith"
          placeholderTextColor="#525252"
        />
        <Text style={styles.subText}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="ex: john@email.com"
          placeholderTextColor="#525252"
        />
        <Text style={styles.subText}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#525252"
          secureTextEntry={true}
        />
        <Text style={styles.subText}>
          Confirm Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#525252"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confettie')}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.socialContainer}>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
          >
            Google
          </Icon.Button>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
          >
            Facebook
          </Icon.Button>
          <Icon.Button
            name="twitter"
            backgroundColor="#1DA1F2"
          >
            Twitter
          </Icon.Button>
        </View>
        <Text style={styles.signinText}>
          Have an account? <Text style={styles.signinLink} onPress={() => navigation.navigate('Login')}>SIGN IN</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#525252',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signupContainer: {
    flex: 2,
    padding: 20,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#162D3A',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#E8E8E8',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#525252',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#162D3A',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
    width: '90%',
    marginLeft: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#525252',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 15,
  },
  signinText: {
    textAlign: 'center',
    color: '#525252',
    marginTop: 0,
  },
  signinLink: {
    color: '#FFA800',
    fontWeight: 'bold',
  },
});
