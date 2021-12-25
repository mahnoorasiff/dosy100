import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Backgroundtwo from '../components/Backgroundtwo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { signUpUser } from '../api/auth-api'
import Toast from '../components/Toast'
import * as Google from 'expo-google-app-auth'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook';



export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

//fblogin

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



//googlelogin

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
        navigation.navigate('Dashboard')
      } else {
        return { cancelled: true }
      }
    } catch (e) {
      alert(e)
    }
  }

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    setLoading(true)
    const response = await signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
    console.log("signup response", response)
    if (response.error) {
      setError(response.error)
    }
    setLoading(false)
  }

  return (
    <Backgroundtwo>
      <BackButton goBack={navigation.goBack} />

      <TextInput
      style={{marginTop:"26%"}}
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
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
      <Button
        loading={loading}
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={signInWithGoogleAsync}>
          <Image
            style={{ width: 60, height: 50, borderRadius: 200 }}
            source={require('../assets/gcloud.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={fblogIn}>
          <Image
            style={{ width: 62, height: 50, borderRadius: 200 }}
            source={require('../assets/fcloud.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      <Toast message={error} onDismiss={() => setError('')} />
    </Backgroundtwo>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 0,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
