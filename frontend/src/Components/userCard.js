import React from 'react';
import '../Components/Styles/usercard.css';

const UserCard = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Transaction</h5>
                <p className="card-text">FirstName: {props.firstname}</p> 
                <p className="card-text">LastName: {props.lastname}</p> 
                <p className="card-text">Age: {props.age}</p> 
                <p className="card-text">Transaction: {props.transactionMoney}</p> 
            </div>
        </div>
    )
}


export default UserCard;