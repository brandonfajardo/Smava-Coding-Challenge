import { TOGGLE_ADD_BANK_ACCOUNT, INPUT_CHANGE, UPDATE_ERROR } from '../actions'

const initialState = {
    addingBankAccount: false,
    firstName: '',
    lastName: '',
    email: '',
    iban: '',
    bankName: '',
    bankAccountsToAdd: [],
    errorMessage: null
}

const register = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ADD_BANK_ACCOUNT:
            return {
                ...state,
                addingBankAccount: !state.addingBankAccount,
                errorMessage: null,
                iban: '',
                bankName: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                [action.item.select]: action.item.event.target.value
            }
        case UPDATE_ERROR:
            return {
                ...state,
                errorMessage: action.item
            }
        default:
            return state
    }
}

export default register