import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white",alignItems:"center"}}>
      <View style={{marginTop:100}}>
        <Text style = {{fontSize:16,fontWeight:"500"}}>TODO-LIST TRACKER</Text>
      </View>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})