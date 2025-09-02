import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <LoginScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
