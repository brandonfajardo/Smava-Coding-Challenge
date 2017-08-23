import { ADD_BANK_ACCOUNT } from '../actions'

const initialState = {
    addingBankAccount: false
}

const register = (state = initialState, action) => {
    switch(action.type){
        case ADD_BANK_ACCOUNT:
            return {
                addingBankAccount: true
            }
        default:
            return state
    }
}

export default register