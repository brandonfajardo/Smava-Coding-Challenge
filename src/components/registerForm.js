import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAddBankAccount, inputChange, updateError } from '../actions'
import BankForm from './bankForm'
import IBAN from 'iban'

const styles = {
    Title: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    InputContainer: {
        marginBottom: '15px'
    },
    SubmitButton: {
        float: 'right'
    },
    BankTitle: {
        marginBottom: '15px'
    },
    ErrorMessage: {
        textAlign: 'center',
        color: '#ff6666'
    },
    AddBankButton: {
        textAlign: 'center'
    }
}

class RegisterForm extends Component {
    constructor (props){
        super(props)

        this.addBankAccount = this.addBankAccount.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    addBankAccount (){
        this.props.toggleAddBankAccount()
    }

    renderAddBankAccountButton() {
        return (
            <div style={styles.AddBankButton}>
                <button onClick={this.addBankAccount} className="btn btn-default">+ Add bank account</button>
            </div>
        )
    }

    renderErrorMessage() {
        return <p style={styles.ErrorMessage}>{this.props.errorMessage}</p>
    }

    onInputChange(event, select) {
        this.props.inputChange({ event, select })
    }

    submitForm() {
        const isValid = (input, regex) => {
            if (input.length !== 0 && input.match(regex)){
                return true
            } else if (input.length !== 0){
                return true
            } else {
                return false
            }
        }

        const fields = [
            {field: 'First Name', valid: isValid(this.props.firstNameInputVal, /^[A-Za-z]*$/)},
            {field: 'Last Name', valid: isValid(this.props.lastNameInputVal, /^[A-Za-z]*$/)},
            {field: 'Email', valid: isValid(this.props.emailInputVal, /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)},
            {field: 'IBAN', valid: IBAN.isValid(this.props.ibanInputVal)},
            {field: 'Bank Name', valid: isValid(this.props.bankNameInputVal)}
        ]

        const invalidFields = fields.filter((field) => {
            if (!field.valid){
                return true
            }
        }).map((input) => input.field)

        if (!this.props.addingBankAccount || (!this.props.ibanInputVal.length && !this.props.bankNameInputVal)){
            this.props.updateError('You should provide at least one bank account')
        } else if (invalidFields.length > 0){
            this.props.updateError(`${invalidFields.toString()} is not valid`)
        } else {
            alert(`
            Form data:
            {
                "firstName": "${this.props.firstNameInputVal}",
                "lastName": "${this.props.lastNameInputVal}",
                "email": "${this.props.emailInputVal}",
                "bankAccounts": [
                    {
                        "iban": "${this.props.ibanInputVal}",
                        "bankName": "${this.props.bankNameInputVal}"
                    }
                ]
            }
            `)
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={styles.Title}>Register Account</h1>
                <div style={styles.InputContainer}>
                    <h6>First name</h6>
                    <input
                        value={this.props.firstNameInputVal}
                        onChange={(e) => this.onInputChange(e, "firstName")} 
                        className="form-control" 
                    />
                </div>
                <div style={styles.InputContainer}>
                    <h6>Last name</h6>
                    <input
                        value={this.props.lastNameInputVal}
                        onChange={(e) => this.onInputChange(e, "lastName")} 
                        className="form-control" 
                    />
                </div>
                <div style={styles.InputContainer}>
                    <h6>Email</h6>
                    <input
                        value={this.props.email}
                        onChange={(e) => this.onInputChange(e, "email")} 
                        className="form-control" 
                    />
                </div>
                <h4 style={styles.BankTitle}>Bank Account</h4>
                {this.props.errorMessage && this.renderErrorMessage()}
                {!this.props.addingBankAccount && this.renderAddBankAccountButton()}
                {this.props.addingBankAccount && (
                    <BankForm 
                        toggleAddBankAccount={this.props.toggleAddBankAccount}
                        inputChange={this.props.inputChange}
                        inputValue={{
                            iban: this.props.ibanInputVal,
                            bankName: this.props.bankNameInputVal
                        }}
                    />
                )}
                {this.props.addingBankAccount && this.renderAddBankAccountButton()}
                <div style={styles.SubmitButton}>
                    <button onClick={this.submitForm} className="btn btn-warning">Submit!</button>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addingBankAccount: state.register.addingBankAccount,
    firstNameInputVal: state.register.firstName,
    lastNameInputVal: state.register.lastName,
    emailInputVal: state.register.email,
    ibanInputVal: state.register.iban,
    bankNameInputVal: state.register.bankName,
    bankAccountsToAdd: state.register.bankAccountsToAdd,
    errorMessage: state.register.errorMessage
})

const mapDispatchToProps = {
    toggleAddBankAccount,
    inputChange,
    updateError
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)