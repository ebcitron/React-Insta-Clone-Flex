import React from 'react';
import {input, button} from 'reactstrap';
import styled from 'styled-components'; 

const Button = styled.button``;


class LoginPage  extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    }


    loginHandler = e => {
        localStorage.setItem('user', this.state.username);
        window.location.reload();
        console.log("loginHandler", this.state.username, localStorage);
    }


    enterUsername = e =>{
        e.preventDefault();

        this.setState({
            username: e.target.value

        });
    };

    enterPassword = e =>{
        e.preventDefault();

        this.setState({
            password: e.target.value
        });
    };

    render(){
    return(
        <div className = "login">
            <form >
                <input
                    name = 'username'
                    type = 'text'
                    placeholder = 'username'
                    value = {this.state.username}
                    onChange={this.enterUsername} 
                    />
            </form>
            <form onSubmit = {this.loginHandler}>
                <input
                    name = 'password'
                    type = 'text'
                    placeholder = 'password'
                    value = {this.state.password}
                    onChange={this.enterPassword}
                    />
            </form>
            <button onClick = {this.loginHandler}>Login</button>
        </div>
        );
    }

}

export default LoginPage;