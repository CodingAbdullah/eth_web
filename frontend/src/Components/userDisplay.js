import { Component } from 'react';
import UserCard from '../Components/userCard';

class UserDisplay extends Component {

    state = {
        user: []
    }

    componentDidMount = () => {
        const options = {
            method: 'GET'
        }

        const URL = "http://localhost:5050/getUsers";

        fetch(URL, options)
        .then(responseBody => responseBody.json())
        .then(response => {
            let userArray = [];

            for (var i = 0; i < response.users.length; i++){
                userArray.push(response.users[i]);    
            }
            
            this.setState({user: userArray});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render = () => {
        const userMapped = this.state.user.map(u => { 
            return (
                <UserCard firstname={u.firstname} lastname={u.lastname} age={u.age} transactionMoney={u.transactionMoney} />
            )
        });

        return (
            <div className="userDisplay">
                {userMapped}
            </div>
        );
    }
}

export default UserDisplay;