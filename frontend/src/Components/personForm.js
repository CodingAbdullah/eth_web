import React, { Component } from 'react';
import '../Components/Styles/personForm.css';

class PersonForm extends Component {
    
    state = {
        firstname: "",
        lastname: "",
        age: 0,
        transactionMoney: 0
    }

    firstNameHandler = (event) => {
        this.setState({
            firstname: event.target.value
        });
    }

    lastNameHandler = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    ageHandler = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    transactionMoneyHandler = (event) => {
        this.setState({
            transactionMoney: event.target.value
        });
    }

    formHandler = () => {
        const firstname = this.state.firstname;
        const lastname = this.state.lastname;
        const age = this.state.age;
        const transactionMoney = this.state.transactionMoney;
        
        const URL = 'http://localhost:5050/signUpForm';
        
        const body = {
            firstname,
            lastname,
            age,
            transactionMoney
        };
        
        const options = {
            method: 'POST',
            headers : {
                'accepts' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(body)
        };

        fetch(URL, options)
        .then( responseBody => {
            responseBody.json();
        })
        .then( response => {
            console.log(response);
        })
        .catch( err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="person">
                <h1 className="person-title">Person Form</h1>
                <form className="person-form" onSubmit={this.formHandler}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.firstNameHandler} name="firstname" type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.lastNameHandler} name="lastname" type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input onChange={this.ageHandler} name="age" type="number" className="form-control" min="18" max="150" required />
                    </div>
                    <div className="form-group">
                        <label>Transaction Money</label>
                        <input onChange={this.transactionMoneyHandler} name="transactionMoney" type="number" className="form-control" min="1" required />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PersonForm;