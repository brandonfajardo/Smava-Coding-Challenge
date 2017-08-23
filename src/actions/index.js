// Types
export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT'
export const INPUT_CHANGE = 'INPUT_CHANGE'

// Actions
export const addBankAccount = () => ({ type: ADD_BANK_ACCOUNT })
export const inputChange = item => ({ type: INPUT_CHANGE, item })