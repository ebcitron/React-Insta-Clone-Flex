import React from 'react';
import {input, button} from 'reactstrap';
import styled from 'styled-components'; 
import $ from 'jquery';
const Button = styled.button``;


class LoginPage  extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
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
            <form>
                <input
                    name = 'username'
                    type = 'text'
                    placeholder = 'username'
                    value = {this.state.username}
                    onChange={this.enterUsername} 
                    />
            </form>
            <form >
                <input
                    name = 'password'
                    type = 'text'
                    placeholder = 'password'
                    value = {this.state.password}
                    onChange={this.enterPassword}
                    />
            </form>
            <button>Login</button>
        </div>
        );
    }

}

export default LoginPage;