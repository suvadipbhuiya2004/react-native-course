import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

function App(): JSX.Element {
    const [RandomBackground, setRandomBackground] = useState('#FFFFFF');

    const generateRandomColor = () => {
        const hexRange = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        setRandomBackground(color);
    }

    return (
        <>
            <StatusBar backgroundColor={RandomBackground} />
            <View style={[styles.container, { backgroundColor: RandomBackground }]}>
                <TouchableOpacity onPress={generateRandomColor}>
                    <View style={[styles.actionBtn]}>
                        <Text style={[styles.actionBtnTxt]}>Press me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
      },
      actionBtn: {
        borderRadius: 12,
        backgroundColor: "#000000",
        paddingVertical: 10,
        paddingHorizontal: 40
      },
      actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
      }
})
export default App;