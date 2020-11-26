import React, {} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UsuarioContext } from '../../contexts/user';

import Chat1 from '../Chat1'
import Chat2 from '../Chat2'

import {
  Container,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';

const Stack = createStackNavigator();

const Groups = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Grupos Ativos" component={GruposAtivos} />
      <Stack.Screen name="Turma 821" component={Chat1} />
      <Stack.Screen name="Turma 843A" component={Chat2} />
    </Stack.Navigator>
  );
}

function GruposAtivos ({navigation}){
  return (
    <Container>
      <ContainerButtons>
        <Button invert={true} onPress={() => navigation.push("Turma 821")}>
          <ButtonText invert={true}>Turma 821</ButtonText>
        </Button>

        <Button invert={true} onPress={() => navigation.push("Turma 843A")}>
          <ButtonText invert={true}>Turma 843A</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
  );
}

export default Groups