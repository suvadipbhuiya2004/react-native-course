import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.HeadingText}>FlatCards</Text>
      <View style={styles.Container}>

        <View style={[styles.card,styles.cardone]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.card,styles.cardtwo]}>
            <Text>Orange</Text>
        </View>

        <View style={[styles.card,styles.cardthree]}>
            <Text>Green</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 10,
    },

    Container: {
        flex:1,
        flexDirection: "row",
        padding: 10,
    },

    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width: 100,
        height:100,
        margin:10,
        borderRadius:5,
    },

    cardone:{
        backgroundColor: "#000080",
    },

    cardtwo:{
        backgroundColor: "#FF0000",
    },

    cardthree:{
        backgroundColor: "#008000",
    },

})