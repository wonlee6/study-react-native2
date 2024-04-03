import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('')

  const handleEntervalue = (e: string) => {
    setEnteredNumber(e)
  }

  const handleConfirmValue = () => {
    const number = +enteredNumber
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => setEnteredNumber('')
          }
        ]
      )
      return
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleEntervalue}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setEnteredNumber('')}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirmValue}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    // elevation: 8 <-- Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})
