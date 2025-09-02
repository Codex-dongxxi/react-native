import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginForm from './components/LoginForm';

const App = () => (
  <SafeAreaView style={styles.container}>
    <LoginForm />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
