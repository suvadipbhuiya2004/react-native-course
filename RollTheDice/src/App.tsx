import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';


import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

type DiceProps = PropsWithChildren <{
    imageurl: ImageSourcePropType
}>

const Dice = ({imageurl}: DiceProps): JSX.Element => {
    return (
        <View style={styles.diceContainer}>
            <Image
                style={styles.diceImage}
                source={imageurl}
            />
        </View>
    );
};

function App(): React.JSX.Element {

    const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

    const rollDice = () => {
        const diceArray = [
            DiceOne,
            DiceTwo,
            DiceThree,
            DiceFour,
            DiceFive,
            DiceSix,
        ];
        setDiceImage(diceArray[Math.floor(Math.random() * diceArray.length)]);
        ReactNativeHapticFeedback.trigger('impactLight', options);
    };

    return (
        <View style={styles.container}>
            <Dice imageurl={DiceImage} />
            <Pressable onPress={rollDice}>
                <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2',
      },
      diceContainer: {
        margin: 12,
      },
      diceImage: {
        width: 200,
        height: 200,
      },
      rollDiceBtnText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase',
      },
});

export default App;
