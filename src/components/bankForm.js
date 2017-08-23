import React from 'react'

const styles = {
    InputContainer: {
        marginBottom: '15px'
    }
}

const BankForm = () => {
    return (
        <div>
            <div style={styles.InputContainer}>
                <h6>IBAN</h6>
                <input className="form-control" />
            </div>
             <div style={styles.InputContainer}>
                <h6>Bank name</h6>
                <input className="form-control" />
            </div>
        </div>
    )
}

export default BankForm