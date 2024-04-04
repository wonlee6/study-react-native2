import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: 'fira-code-bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})
