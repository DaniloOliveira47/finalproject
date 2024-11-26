
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Started from './src/Pages/Started';
import Cadastro from './src/Pages/Cadastro';
import CadJogador from './src/Pages/CadJogador';
import CadClube from './src/Pages/CadClube';
import CadJogador2 from './src/Pages/CadJogador2';
import Home from './src/Pages/Home';
import Account from './src/Pages/Perfil';
import Categories from './src/Pages/Transfer';
import DetalhesJogador from './src/Pages/DetalhesJogador';
import ClubStatistics from './src/Pages/estatisticas';
import MeuElenco from './src/Pages/MeuElenco';
import AnalisarJogador from './src/Pages/analisarJogador';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Started">
            <Stack.Screen name="Started" component={Started} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="CadJogador" component={CadJogador} options={{headerShown: false}}/>
            <Stack.Screen name="CadClube" component={CadClube} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Perfil" component={Account} options={{headerShown: false}}/>
            <Stack.Screen name="CadJogador2" component={CadJogador2} options={{headerShown: false}}/>
            <Stack.Screen name="Transfer" component={Categories} options={{headerShown: false}}/>
            <Stack.Screen name="DetalhesJogador" component={DetalhesJogador} options={{headerShown: false}}/>
            <Stack.Screen name="estatisticas" component={ClubStatistics} options={{headerShown: false}}/>
            <Stack.Screen name="MeuElenco" component={MeuElenco} options={{headerShown: false}}/>
            <Stack.Screen name="AnalisarJogador" component={AnalisarJogador} options={{headerShown: false}}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}
