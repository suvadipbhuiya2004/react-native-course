import { Formik, FormikProps } from "formik";
import { styles } from "./Styles";
import { IsPasswordGenerated, LowerCase, Numbers, Password, setLowerCase, setNumbers, setSymbols, setUpperCase, Symbols, UpperCase } from "./States";
import { PasswardSchema } from "./ValidationSchemas";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import { GeneratePasswordString } from "./PasswordGenerator"; // Add this line

interface GeneratePasswordOptions {
    length: number;
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    symbols: boolean;
}

interface FormValues {
    PasswordLength: string;
}


const FormikComponent = () => {
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

return (
    <Formik
        initialValues={{ PasswordLength: '' }}
        validationSchema={PasswardSchema}
        onSubmit={(values: FormValues) => {
            const options: GeneratePasswordOptions = {
                length: +(values.PasswordLength),
                upperCase,
                lowerCase,
                numbers,
                symbols
            };
            GeneratePasswordString(options);
        }}
    >
        {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleSubmit,
            handleReset,
        }: FormikProps<FormValues>) => (
            <View>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                        <Text style={styles.heading}>Password Length</Text>
                        {touched.PasswordLength && errors.PasswordLength && (
                            <Text style={styles.errorText}>
                                {errors.PasswordLength}
                            </Text>
                        )}
                    </View>
                    <TextInput
                        style={styles.inputStyle}
                        value={values.PasswordLength}
                        onChangeText={handleChange('PasswordLength')}
                        placeholder="Eg. 8"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Uppercase Letters</Text>
                    <BouncyCheckbox
                        useBuiltInState={false}
                        isChecked={upperCase}
                        onPress={() => setUpperCase(!upperCase)}
                        fillColor="#29AB87"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Lowercase Letters</Text>
                    <BouncyCheckbox
                        useBuiltInState={false}
                        isChecked={lowerCase}
                        onPress={() => setLowerCase(!lowerCase)}
                        fillColor="#29AB87"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Numbers</Text>
                    <BouncyCheckbox
                        useBuiltInState={false}
                        isChecked={numbers}
                        onPress={() => setNumbers(!numbers)}
                        fillColor="#29AB87"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Symbols</Text>
                    <BouncyCheckbox
                        useBuiltInState={false}
                        isChecked={symbols}
                        onPress={() => setSymbols(!symbols)}
                        fillColor="#29AB87"

                    />
                </View>

                <View style={styles.formActions}>
                    <TouchableOpacity
                        disabled={!isValid}
                        style={styles.primaryBtn}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.secondaryBtn}
                        onPress={() => handleReset()}
                    >
                        <Text style={styles.secondaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </Formik>
);