import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/colors'

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6
  }
})
