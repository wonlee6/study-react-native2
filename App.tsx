import { StyleSheet, ImageBackground } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'

export default function App() {
  const [userNumber, setUserNumber] = useState(0)

  const component = {}

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
})
