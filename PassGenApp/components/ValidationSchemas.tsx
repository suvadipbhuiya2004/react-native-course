import * as Yup from 'yup'

export const PasswardSchema = Yup.object().shape({
    PasswordLength: Yup.number()
        .min(4, 'Password lengths should be minimum of length 4.')
        .max(20, 'Password length should be maximum of length 20.')
        .required('Password length cannot be empty.')
})

export const noNumberSchema = Yup.string()
    .test('no-number', 'String must not contain any numbers', (value) => {
        const hasNumber = /\d/.test(value || '');
        return !hasNumber;
    });

export const noUpperCaseSchema = Yup.string()
    .test('no-uppercase', 'String must not contain any uppercase letters', (value) => {
        const hasUpperCase = /[A-Z]/.test(value || '');
        return !hasUpperCase; 
    });

export const noLowerCaseSchema = Yup.string()
    .test('no-lowercase', 'String must not contain any lowercase letters', (value) => {
        const hasLowerCase = /[a-z]/.test(value || '');
        return !hasLowerCase;
    });

export const noSymbolSchema = Yup.string()
    .test('no-symbols', 'String must not contain any symbols', (value) => {
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value || '');
        return !hasSymbol;
    });