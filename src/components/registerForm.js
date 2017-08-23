import React, { Component } from 'react'

const styles = {
    Title: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    InputContainer: {
        marginBottom: '15px'
    }
}

class RegisterForm extends Component {
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
                <h4>Bank Accounts</h4>
                <div style={{textAlign: 'center'}}>
                    <button className="btn btn-default">+ Add bank account</button>
                </div>
                <div style={{float: 'right'}}>
                    <button className="btn btn-warning">Submit!</button>
                </div>
            </div>
        )
    }
}

export default RegisterForm