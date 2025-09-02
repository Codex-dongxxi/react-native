import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <LoginForm />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default LoginScreen;
