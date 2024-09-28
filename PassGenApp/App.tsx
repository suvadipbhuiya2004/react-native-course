import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { noLowerCaseSchema, noNumberSchema, noSymbolSchema, noUpperCaseSchema } from './components/ValidationSchemas';
import { Password, IsPasswordGenerated, LowerCase, UpperCase, Numbers, Symbols } from './components/States'
import { styles } from "./components/Styles";
import { Formik, FormikProps } from "formik";
import { FormikComponent } from './components/formik';

function App() {
    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    <FormikComponent/>
                    {IsPasswordGenerated ? (
                        <View style={[styles.card, styles.card]}>
                            <Text style={styles.subTitle}>Result :- </Text>
                            <Text style={styles.description}>Long press to copy</Text>
                            <Text selectable style={styles.generatedPassword}>{Password}</Text>
                        </View>
                    ): null}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default App;