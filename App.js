import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  const [screen, setScreen] = useState('login');

  return (
    <SafeAreaView style={styles.safeArea}>
      {screen === 'login' ? (
        <LoginScreen onSignUp={() => setScreen('signup')} />
      ) : (
        <SignUpScreen onLogin={() => setScreen('login')} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
