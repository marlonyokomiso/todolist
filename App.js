import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen
        component={Home}
        name="Tarefas"
        options={{
          title: 'Todo List',
          headerTitleStyle: {
            textAlign: 'center',
            alignItems: 'center',
            color: '#000',
          },
          headerStyle: {
            backgroundColor: '#eee',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
