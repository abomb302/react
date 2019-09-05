import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
    }

    submit = (event) => {
        event.preventDefault()

        const email = this.state.email
        const password = this.state.password
        const msg = `Email: ${email}\nPassword: '${password}'`
        this.props.history.push('/home')
    }
    formChanges = (event) => {
        const controlName = event.target.name
        const value = event.target.value
        this.setState({ [controlName]: value })
    }
    render() {
        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to='/home/' />
        // } else {
        return (
            <div className="wrapper login-page">
                <h1 className="title">___ WELCOME ___</h1>
                <form className="form-login" onSubmit={this.submit}>
                    <input type="email" required name="email" placeholder="Email" onChange={this.formChanges} />
                    <input type="password" required name="password" placeholder="Password" onChange={this.formChanges} />
                    <button type="submit">LOGIN</button>
                </form>>
            </div>
        )
        // }
    }
}

export default Login;