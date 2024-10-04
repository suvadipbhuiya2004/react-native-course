import React from 'react';

import {
    FlatList,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import CurrencyButton from './components/CurrencyButton';
import { currencyByRupee } from './constants';
import Snackbar from 'react-native-snackbar';


const App = (): React.JSX.Element => {

    const [result, setResult] = React.useState('');
    const [inputCurrency, setInputCurrency] = React.useState('');
    const [inputAmount, setInputAmount] = React.useState('');

    const buttonPressed = (targetValue: Currency) => {
        if (!inputAmount) {
            return Snackbar.show({
                text: 'Please enter amount',
                backgroundColor: '#EA7773',
                textColor: '#000000',
            });
        }
        const inputAmountNumber = parseFloat(inputAmount);
        if (!isNaN(inputAmountNumber)) {
            const convertedAmount = inputAmountNumber * targetValue.value;
            const resultText = `${targetValue.symbol} ${convertedAmount.toFixed(2)} `;
            setResult(resultText);
            setInputCurrency(targetValue.name);
        }
        else {
            return Snackbar.show({
                text: 'Please enter valid amount',
                backgroundColor: '#EA7773',
                textColor: '#000000',
            });
        }
    };

    return (
        <>
            <StatusBar />
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.rupeesContainer}>
                        <Text style={styles.rupee}>₹</Text>
                        <TextInput
                            maxLength={14}
                            value={inputAmount}
                            clearButtonMode="always"
                            onChangeText={setInputAmount}
                            keyboardType="numeric"
                            placeholder="Enter Amount in Rupees"
                        />
                    </View>
                    {result && (
                        <Text style={styles.resultTxt}>{result}</Text>
                    )}
                </View>
                <View style={styles.bottomContainer}>
                    <FlatList
                        numColumns={1}
                        data={currencyByRupee}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <Pressable
                                style={[
                                    styles.button,
                                    inputCurrency === item.name && styles.selected,
                                ]}
                                onPress={() => buttonPressed(item)}
                            >
                                <CurrencyButton {...item} />
                            </Pressable>
                        )}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#515151',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    resultTxt: {
        fontSize: 32,
        color: '#000000',
        fontWeight: '800',
    },
    rupee: {
        marginRight: 8,

        fontSize: 22,
        color: '#000000',
        fontWeight: '800',
    },
    rupeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputAmountField: {
        height: 40,
        width: 200,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    bottomContainer: {
        flex: 3,
    },
    button: {
        flex: 1,

        margin: 12,
        height: 60,

        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    selected: {
        backgroundColor: '#ffeaa7',
    },
});

export default App;
