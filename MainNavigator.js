import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Started from './src/Pages/Started';
import Cadastro from './src/Pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Started">
            <Stack.Screen name="Started" component={Started} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Cadastro} />

        </Stack.Navigator>
     </NavigationContainer>
  )
}
