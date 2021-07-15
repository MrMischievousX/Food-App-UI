import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Detail from './components/Detail';
const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/Fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/Fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/Fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-BoldItalic': require('./assets/Fonts/Montserrat-BoldItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
