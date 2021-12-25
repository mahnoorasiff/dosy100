import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import Boardone from './src/screens/Boardone'
import Boardtwo from './src/screens/Boardtwo'
import Emailverify from './src/screens/Emailverify'
import HomeDrawer from './components/dnav'

const LoginStack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

const LoginSignUpStack = () => {
  return (
    <Provider theme={theme}>
      
        <LoginStack.Navigator
          initialRouteName="Board1"
          screenOptions={{
            headerShown: false,
          }}
        >
          <LoginStack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <LoginStack.Screen name="StartScreen" component={StartScreen} />
          <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
          <LoginStack.Screen name="RegisterScreen" component={RegisterScreen} />
          <LoginStack.Screen name="Dashboard" component={HomeDrawer} />
          <LoginStack.Screen name="Emailverify" component={Emailverify} />
          <LoginStack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <LoginStack.Screen name="Board1" component={Boardone} />
          <LoginStack.Screen name="Board2" component={Boardtwo} />
        </LoginStack.Navigator>
    </Provider>
  )
}

export default class AppSecond extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <LoginSignUpStack/>
      </NavigationContainer>
      
    );
  }
}