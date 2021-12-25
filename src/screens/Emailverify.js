import React from 'react'
import BackgroundStart from '../components/BackgroundStart'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Text } from 'react-native-paper'
export default function Emailverify({ navigation }) {
  return (
    <BackgroundStart>
      <Text>
          Your account has been created. But please do verify your email for full access.
      </Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Back
      </Button>
    </BackgroundStart>
  )
}
