import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Groups from '../pages/Groups'
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Grupos"
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "#ccc",
      }}
    >
      <Tab.Screen
        name="Grupos"
        component={Groups}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chat"
              color={color}
              size={32}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              size={32}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;