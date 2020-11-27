import React from 'react';

const ConfirmationModal = (props) => {
    const className = props.showConfirmationBox ? "confirmation-box--show" : '';
    return <div className="box-layout box-layout--cover">
        <div className={`confirmation-box ${className}`}>
            <p>Should the expense be removed?</p>
            <div className="confirmation-box__buttons">
                <button className="button button--weak" onClick={props.hideConfirmationModal}>Cancel</button>
                <button className="button button--remove" onClick={props.removeExpense}>Remove</button>
            </div>
        </div>
    </div>
}

export default ConfirmationModal;
