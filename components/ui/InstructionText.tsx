import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { Colors } from '../../constants/colors'

export default function InstructionText({
  children,
  style
}: {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'fira-code-bold',
    color: Colors.accent500,
    fontSize: 24
  }
})
