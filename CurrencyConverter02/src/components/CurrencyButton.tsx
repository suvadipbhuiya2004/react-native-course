import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element     => {
    return(
        <View style={styles.ButtonContainer}>
            <Text style={styles.Flag}>{props.flag}</Text>
            <Text style={styles.Counntry}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonContainer: {
        alignItems:'center',
    },
    Flag: {
        fontSize:25,
        color: '#000000',
        marginBottom: 5,
    },
    Counntry:{
        fontSize: 15,
        color: '#D1D1D1',
    },
});

export default CurrencyButton;
