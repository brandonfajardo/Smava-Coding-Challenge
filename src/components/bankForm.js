import React, { Component } from 'react'

const styles = {
    InputContainer: {
        marginBottom: '15px'
    },
    Delete: {
        float: 'right', 
        marginTop: '-35px', 
        marginRight: '-20px', 
        cursor: 'pointer'
    }
}

class BankForm extends Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    delete() {
        this.props.toggleAddBankAccount()
    }

    onInputChange(event, select) {
        this.props.inputChange({ event, select })
    }

    render() {
        return (
            <div>
                <div style={styles.InputContainer}>
                    <h6>IBAN</h6>
                    <input
                        value={this.props.inputValue.iban}
                        onChange={(e) => this.onInputChange(e, "iban")} 
                        className="form-control" 
                    />
                    <span style={styles.Delete} onClick={this.delete}>x</span>
                </div>
                <div style={styles.InputContainer}>
                    <h6>Bank name</h6>
                    <input
                        value={this.props.inputValue.bankName}
                        onChange={(e) => this.onInputChange(e, "bankName")} 
                        className="form-control" 
                    />
                </div>
            </div>
        )
    }
}

export default BankForm