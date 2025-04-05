import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Signup from './src/screens/SignUp';
import Listing from './src/screens/ListingCards'
import Confettie from './src/screens/ConfettiePractice'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Listing" component={Listing} options={{ headerShown: false }}/>
        <Stack.Screen name="Confettie" component={Confettie} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Confettie/>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  }
});
