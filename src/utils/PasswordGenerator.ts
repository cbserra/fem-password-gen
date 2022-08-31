import { GeneratePasswordOptions } from "@/types/Types"

enum DictionaryType {
    Lowercase = "lowercase",
    Uppercase = "uppercase",
    Numbers = "numbers",
    Symbols = "symbols",
}

const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NUMBERS = "0123456789"
const SYMBOLS = "!@#$%^&*()_+-=[]{};':,./<>?`~"


export function generatePassword(options: GeneratePasswordOptions): string {
    const { length, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options
    const dictionary = buildDictionary(includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    const keys = Array.from(dictionary.keys())

    let password = ''
    while (password.length < length) {
        const shuffledKeys = keys.sort(() => 0.5 - Math.random())

        shuffledKeys.forEach(key => {
            const dictionaryValue = dictionary.get(key)
            if (dictionaryValue) {
                password += dictionaryValue[Math.floor(Math.random() * dictionaryValue.length)]
            }
        })
    }
    
    return password
}

function buildDictionary(includeLowercase: boolean, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean): Map<DictionaryType, string[]> {
    const dictionary = new Map<DictionaryType, string[]>()

    if (includeLowercase) {
        dictionary.set(DictionaryType.Lowercase, LOWERCASE_LETTERS.split(''))
    }

    if (includeUppercase) {
        dictionary.set(DictionaryType.Uppercase, UPPERCASE_LETTERS.split(''))
    }

    if (includeNumbers) {
        dictionary.set(DictionaryType.Numbers, NUMBERS.split(''))
    }

    if (includeSymbols) {
        dictionary.set(DictionaryType.Symbols, SYMBOLS.split(''))
    }

    return dictionary
}

// module.exports = { generatePassword }