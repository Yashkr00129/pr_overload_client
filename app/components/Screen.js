import { StyleSheet, SafeAreaView, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'


export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        {children}
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: "100%"
  },
  view: {
    flex: 1
  }
})