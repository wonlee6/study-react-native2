import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'

type Props = {
  roundNumber: number
  guess: number
}

export default function GuessLogItem({ guess, roundNumber }: Props) {
  return (
    <View style={style.listItem}>
      <Text style={style.itemText}>#{roundNumber}</Text>
      <Text style={style.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4
  },
  itemText: {
    fontFamily: 'fira-code'
  }
})
