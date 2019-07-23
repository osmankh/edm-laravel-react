import React, { Component } from 'react'

import ForgetSection from './ForgetSection'
import LoginSection from "./LoginSection";

class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            page: 'login',
        }
    }

    changeTo (page) {
        this.setState({
            page: page
        })
    }

    getLoginSection () {
        switch (this.state.page) {
            case 'login': return <LoginSection changePageHandlar={() => this.changeTo('forget')} />;
            case 'forget': return <ForgetSection  changePageHandlar={() => this.changeTo('login')} />;
        }
    }

    render () {
        return (
            <main className="container main cf" role="main">
                <div className="row">
                    {this.getLoginSection()}
                </div>
            </main>
        )
    }
}

export default Login
