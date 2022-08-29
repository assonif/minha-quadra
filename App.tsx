import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     border: '1px solid black',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
