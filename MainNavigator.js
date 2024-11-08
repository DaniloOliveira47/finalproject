import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Started from './src/Pages/Started';
import Cadastro from './src/Pages/Cadastro';
import CadJogador from './src/Pages/CadJogador';
import CadClube from './src/Pages/CadClube';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Started">
            <Stack.Screen name="Started" component={Started} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="CadJogador" component={CadJogador} options={{headerShown: false}}/>
            <Stack.Screen name="CadClube" component={CadClube} options={{headerShown: false}}/>

        </Stack.Navigator>
     </NavigationContainer>
  )
}
