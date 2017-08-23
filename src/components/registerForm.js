import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBankAccount } from '../actions'
import BankForm from './bankForm'

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
    }
}

class RegisterForm extends Component {
    constructor (props){
        super(props)

        this.addBankAccount = this.addBankAccount.bind(this)
    }

    addBankAccount (){
        this.props.addBankAccount()
    }

    renderAddBankAccountButton() {
        return (
            <div style={{textAlign: 'center'}}>
                <button onClick={this.addBankAccount} className="btn btn-default">+ Add bank account</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1 style={styles.Title}>Register Account</h1>
                <div style={styles.InputContainer}>
                    <h6>First name</h6>
                    <input className="form-control" />
                </div>
                <div style={styles.InputContainer}>
                    <h6>Last name</h6>
                    <input className="form-control" />
                </div>
                <div style={styles.InputContainer}>
                    <h6>Email</h6>
                    <input className="form-control" />
                </div>

                <h4 style={styles.BankTitle}>Bank Accounts</h4>

                {!this.props.addingBankAccount && this.renderAddBankAccountButton()}

                {this.props.addingBankAccount && <BankForm />}

                {this.props.addingBankAccount && this.renderAddBankAccountButton()}

                <div style={styles.SubmitButton}>
                    <button className="btn btn-warning">Submit!</button>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addingBankAccount: state.register.addingBankAccount
})

const mapDispatchToProps = {
    addBankAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)