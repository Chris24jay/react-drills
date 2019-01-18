import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            userName: '',
            passWord: '',
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsername(val){
        console.log("Username:", val)
        this.setState({ userName: val })
    }

    handlePassword(val){
        console.log('Password:', val)
        this.setState({ passWord: val })
    }

    handleLogin(){
        alert('Username: ' + this.state.userName + " Password: " + this.state.passWord)
    }

    



    render(){
        return(
            <div>
                <input placeholder="Username" onChange={
                    (e) => {this.handleUsername(e.target.value)}
                }/>
                <input placeholder="Password" onChange={(e) => {this.handlePassword(e.target.value)}} />
                <button onClick={this.handleLogin}>Login</button>
            </div>

        )
    }
}

export default Login