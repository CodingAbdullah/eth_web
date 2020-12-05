import React, { Component } from 'react';
import '../Components/Styles/login.css';

class Login extends Component  {
    
    state = {
        username: "",
        password: ""
    }

    userNameFieldHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    passwordFieldHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    formHandler = () => {
        // example error message

        let message = "";

        if (this.state.username.length() === 0){
            message = "Length of the username";
        }
        else if (this.state.password.length() === 0) {
            message = "Length of the password";
        }
        else {
            message = "Valid entries";
        }
    }

    render() {
        return (
            <div className="login">
                <form class="login-form">
                    <div class="form-group ">
                        <label>Username: {this.state.username}</label>
                        <input onChange={this.userNameFieldHandler} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Password: {this.state.password}</label>
                        <input onChange={this.passwordFieldHandler} type="password" class="form-control" />
                    </div>
                    <button onClick={this.formHandler} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;