import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

function App(): JSX.Element {
    const [RandomBackground, setRandomBackground] = useState('#FFFFFF');
    const [RandomColorSquare1, setRandomColorSquare1] = useState('#F1FFFF');
    const [RandomColorSquare2, setRandomColorSquare2] = useState('#FF2FFF');
    const [RandomColorCircle1, setRandomcolorCircle1] = useState('#FFF3FF');
    const [RandomColorCircle2, setRandomcolorCircle2] = useState('#FFFF4F');
    const [RandomNumber1, setRandomNumber1] = useState(0);
    const [RandomNumber2, setRandomNumber2] = useState(0);
    const [RandomNumber3, setRandomNumber3] = useState(0);
    const [RandomNumber4, setRandomNumber4] = useState(0);


    const generateRandomColor = () => {
        const hexRange = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 9);
    }

    const changeColor = () => {
        let color;
        let Number;
        color = generateRandomColor();
        setRandomBackground(color);

        color = generateRandomColor();
        setRandomColorSquare1(color);

        color = generateRandomColor();
        setRandomColorSquare2(color);

        color = generateRandomColor();
        setRandomcolorCircle1(color);

        color = generateRandomColor();
        setRandomcolorCircle2(color);

        Number = generateRandomNumber();
        setRandomNumber1(Number);

        Number = generateRandomNumber();
        setRandomNumber2(Number);

        Number = generateRandomNumber();
        setRandomNumber3(Number);

        Number = generateRandomNumber();
        setRandomNumber4(Number);
    }

    return (
        <>
            <StatusBar backgroundColor={RandomBackground} />
            <View style={[styles.container1,{ backgroundColor: RandomBackground }]}>
                <View style={[styles.square, styles.container, { backgroundColor: RandomColorSquare1 }]} >
                    <Text style={{color:"#000000"}}>{RandomNumber1}</Text>
                </View>
                <View style={[styles.circle, styles.container, { backgroundColor: RandomColorCircle1 }]}>
                    <Text style={{color:"#000000"}}>{RandomNumber2}</Text>
                </View>
            </View>
            <View style={[styles.container, { backgroundColor: RandomBackground }]}>
                <TouchableOpacity onPress={changeColor}>
                    <View style={[styles.actionBtn]}>
                        <Text style={[styles.actionBtnTxt]}>Press me</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.container1,{ backgroundColor: RandomBackground }]}>
                <View style={[styles.circle, styles.container, { backgroundColor: RandomColorCircle2 }]}>
                    <Text style={{color:"#000000"}}>{RandomNumber3}</Text>
                </View>
                <View style={[styles.square, styles.container, { backgroundColor: RandomColorSquare2 }]}>
                    <Text style={{color:"#000000"}}>{RandomNumber4}</Text>
                </View>
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
      container1:{
        flex:1,
        flexDirection: "row",
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
      },
      square: {
        width: 150,
        height: 150,
        borderRadius: 10,
        margin:15,
      },
      circle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        margin:15,
      }
})
export default App;