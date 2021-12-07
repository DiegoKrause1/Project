import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent"
        },
        headerShown: false
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}