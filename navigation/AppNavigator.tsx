import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleAppointmentScreen from '../screens/ScheduleAppointmentScreen';
import ViewAppointmentsScreen from '../screens/ViewAppointmentsScreen';
import { RootStackParamList } from './types';
import EditAppointmentScreen from '../screens/EditAppointmentScreen';


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen} />
        <Stack.Screen name="ViewAppointmentsScreen" component={ViewAppointmentsScreen} />
        <Stack.Screen name="EditAppointment" component={EditAppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
