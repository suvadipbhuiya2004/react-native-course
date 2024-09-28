import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
        <Text style={styles.HeadingText}>ElevatedCards</Text>
        <ScrollView horizontal={true} style={styles.Container}>

        <View style={[styles.card,styles.Elevatedcards]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card,styles.Elevatedcards]}>
            <Text>Me</Text>
        </View>

        <View style={[styles.card,styles.Elevatedcards]}>
            <Text>To</Text>
        </View>

        <View style={[styles.card,styles.Elevatedcards]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card,styles.Elevatedcards]}>
            <Text>More.....</Text>
        </View>

      </ScrollView>
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
        padding:10,
    },

    card: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width: 100,
        height:100,
        margin:10,
        borderRadius:5,
    },

    Elevatedcards: {
        backgroundColor:"#CAD5E2",
        elevation: 4,
        shadowOffset: {
            height: 10,
            width: 10,
        },
        shadowColor:"#FF0000",
        shadowOpacity:1,
        shadowRadius:5,
    },
})