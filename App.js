import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
import RecoverPassword from './pages/recoverPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
