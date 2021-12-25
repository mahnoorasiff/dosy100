import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { loginUser } from '../api/auth-api'
import Toast from '../components/Toast'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase/app'
import * as Facebook from 'expo-facebook';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    setLoading(true)
    const response = await loginUser({
      email: email.value,
      password: password.value,
      
    })
    console.log("response login", response)
    if (response.error) {
      setError(response.error)
    }
    setLoading(false)
  }


//fb

async function fblogIn() {
  try {
    await Facebook.initializeAsync({
      appId: '148150550642695',
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      alert('Logged in!', `Hi ${(await response.json()).name}!`);
      navigation.navigate('Dashboard')
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}



  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          '170961750625-tur9q1b49qusoklb9id5l0kbrmhqg8iq.apps.googleusercontent.com',
        iosClientId:
          '170961750625-7834ogg0esp3q6k61d6i92paje9kr65a.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        console.log(result.user)
      // get the access token and id token
      const { accessToken, idToken } = result
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      )
      const firebaseUserCredential = await firebase
        .auth()
        .signInWithCredential(credential)
        
      navigation.navigate('Dashboard')
    } else {
      return { cancelled: true }
    }
  } catch (e) {
    alert(e)
  }
}
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
       {/* <Header >Welcome back.</Header>  */}
      <TextInput
      style={{marginTop:"26%"}}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button loading={loading} mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={signInWithGoogleAsync}>
          <Image
            style={{ width: 60, height: 50, borderRadius: 200 }}
            source={require('../assets/gcloud.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={fblogIn}>
          <Image
            style={{ width: 62, height: 50, borderRadius: 200 }}
            source={require('../assets/fcloud.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Toast message={error} onDismiss={() => setError('')} />
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
