import { useState } from "react";
import { noLowerCaseSchema, noNumberSchema, noSymbolSchema, noUpperCaseSchema } from "./ValidationSchemas";

export const [Password, setPassword] = useState('')
export const [IsPasswordGenerated, setIsPasswordGenerated] = useState(false)
export const [LowerCase, setLowerCase] = useState(true)
export const [UpperCase, setUpperCase] = useState(false)
export const [Numbers, setNumbers] = useState(false)
export const [Symbols, setSymbols] = useState(false)

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+-=[]{}|;:"<>,./?';

export const GeneratePasswordOptions = (PasswordLength: number) => { 
    let characters = ''
    if (LowerCase) {
        characters += lowercase
    }
    if (UpperCase) {
        characters += uppercase
    }
    if (Numbers) {
        characters += number
    }
    if (Symbols) {
        characters += symbol
    }
    const resultPassword = CreatePassword(PasswordLength, characters)
    setPassword(resultPassword)
    setIsPasswordGenerated(true)
}
const CreatePassword = (PasswordLength: number, characters: string) => {
    let result = '';
    for (let i = 0; i < PasswordLength; i++) {
        const charIndex = Math.round(Math.random() * characters.length)
        result += characters.charAt(charIndex)
    }
    check(result, LowerCase, UpperCase, Numbers, Symbols)
    return result
}

const check = (Password: string, LowerCase: boolean, UpperCase: boolean, Numbers: boolean, Symbols: boolean) => {

    if (LowerCase) {
        noLowerCaseSchema.validate(Password).then(() => {
            Password = replaceRandomIndexWithRandomNumber(Password)
            check(Password, LowerCase, UpperCase, Numbers, Symbols)
        })
    }

    if (UpperCase) {
        noUpperCaseSchema.validate(Password).then(() => {
            Password = replaceRandomIndexWithRandomLowercaseChar(Password)
            check(Password, LowerCase, UpperCase, Numbers, Symbols)
        })
    }

    if (Numbers) {
        noNumberSchema.validate(Password).then(() => {
            Password = replaceRandomIndexWithRandomUppercaseChar(Password)
            check(Password, LowerCase, UpperCase, Numbers, Symbols)
        })
    }

    if (Symbols) {
        noSymbolSchema.validate(Password).then(() => {
            Password = replaceRandomIndexWithRandomSymbol(Password)
            check(Password, LowerCase, UpperCase, Numbers, Symbols)
        })
    }
}


function replaceRandomIndexWithRandomNumber(str: string): string {
    if (str.length === 0) {
        return str;
    }
    
    const randomIndex = Math.floor(Math.random() * str.length);
    const randomNumber = Math.floor(Math.random() * 10);
    const newStr = str.substring(0, randomIndex) + number.charAt(randomNumber) + str.substring(randomIndex + 1);
    
    return newStr;
}

function replaceRandomIndexWithRandomLowercaseChar(str: string): string {
    if (str.length === 0) {
        return str;
    }
    
    const randomIndex = Math.floor(Math.random() * str.length);
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // Generate a random lowercase letter code
    const randomChar = String.fromCharCode(randomCharCode);
    
    const newStr = str.substring(0, randomIndex) + randomChar + str.substring(randomIndex + 1);
    
    return newStr;
}

function replaceRandomIndexWithRandomUppercaseChar(str: string): string {
    if (str.length === 0) {
        return str;
    }
    
    const randomIndex = Math.floor(Math.random() * str.length);
    const randomCharCode = Math.floor(Math.random() * 26) + 65; // Generate a random uppercase letter code
    const randomChar = String.fromCharCode(randomCharCode);
    
    const newStr = str.substring(0, randomIndex) + randomChar + str.substring(randomIndex + 1);
    
    return newStr;
}

function replaceRandomIndexWithRandomSymbol(str: string): string {
    if (str.length === 0) {
        return str;
    }
    
    const symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,./?"
    const randomIndex = Math.floor(Math.random() * str.length);
    const randomSymbolIndex = Math.floor(Math.random() * symbol.length);
    const randomSymbol = symbol[randomSymbolIndex];
    
    const newStr = str.substring(0, randomIndex) + randomSymbol + str.substring(randomIndex + 1);
    
    return newStr;
}
const ResetPasswordState = (PasswordLength: number) => { 
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
}