import { ADD_BANK_ACCOUNT, INPUT_CHANGE } from '../actions'

const initialState = {
    addingBankAccount: false,
    firstName: '',
    lastName: '',
    email: ''
}

const register = (state = initialState, action) => {
    switch(action.type){
        case ADD_BANK_ACCOUNT:
            return {
                ...state,
                addingBankAccount: true
            }
        case INPUT_CHANGE:
            return {
                ...state,
                [action.item.select]: action.item.event.target.value
            }
        default:
            return state
    }
}

export default register