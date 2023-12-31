import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoadingPage from '../pages/LoadingPage'
import LoginPage from '../pages/LoginPage'
import FirstLoginPage from '../pages/FirstLoginPage'
import Dashboard from '../pages/Dashboard'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loading' screenOptions={{headerShown:false}}>
        <Stack.Screen name='loading' component={LoadingPage}/>
        <Stack.Screen name='login' component={LoginPage}/>
        <Stack.Screen name='firstLogin' component={FirstLoginPage}/>
        <Stack.Screen name='forgotPassword' component={ForgotPasswordPage}/>
        <Stack.Screen name='dashboard' component={Dashboard}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})