import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.HeadingText}>Trending Places</Text>
            <View style={[styles.card,styles.cardElevated]}></View>
        </View>
  )
}

const styles = StyleSheet.create({
    HeadingText: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 10,
    },

    card: {},

    cardElevated: {},
})