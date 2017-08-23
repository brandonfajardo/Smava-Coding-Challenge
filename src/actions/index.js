// Types
export const TOGGLE_ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const UPDATE_ERROR = 'UPDATE_ERROR'

// Actions
export const toggleAddBankAccount = () => ({ type: TOGGLE_ADD_BANK_ACCOUNT })
export const inputChange = item => ({ type: INPUT_CHANGE, item })
export const updateError = item => ({ type: UPDATE_ERROR, item })
