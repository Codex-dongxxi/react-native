import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({onSignUp}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <LoginForm />
    <Button title="Go to Sign Up" onPress={onSignUp} />
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
