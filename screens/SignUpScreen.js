import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = ({onLogin}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
    <SignUpForm />
    <Button title="Back to Login" onPress={onLogin} />
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

export default SignUpScreen;
