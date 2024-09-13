import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Emergencia from './src/views/emergencia'
import Home from './src/views/home'
import scan from './src/views/scan'
import info from './src/views/info'
import contacto from './src/views/Contactos'

const Stack = createNativeStackNavigator()

function MyStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Home}
        />  
        <Stack.Screen
          name="emergencia"
          component={Emergencia}
        />
        <Stack.Screen 
          name='scan'
          component={scan}
        />
        <Stack.Screen
          name='info'
          component={info}
        />
        <Stack.Screen
          name='contacto'
          component={contacto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack