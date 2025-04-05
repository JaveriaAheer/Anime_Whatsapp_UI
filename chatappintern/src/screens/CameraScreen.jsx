import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CameraScreen = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/e6/11/c0/e611c0b67f0404cebf1801d7f029d506.jpg' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* <Text style={styles.text}>Camera Screen</Text> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.6)', // Optional: add an overlay to improve text readability
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CameraScreen;
