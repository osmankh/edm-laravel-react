import React, { Component } from 'react'
import ButtonWithIconOnHover from '../common/ButtonWithIconOnHover'
import '../../../sass/components/login/login.scss'

class LoginSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="login_window">
                <h1>Build your <span className="bolder">custom EDM</span><br/>in just minutes.</h1>
                <div className="login_box">
                    <ol>
                        <li>
                            <label htmlFor="txt_username">Username *</label>
                            <input type="text" id="txt_username" name="txt_username" autoComplete="off"
                                   required="" placeholder="Username" className=""/>
                            <label htmlFor="txt_username" className="error"></label>
                            <img className="fa fa-user-login"
                                 src="storage/user-login.png"/>
                        </li>
                        <li>
                            <label htmlFor="txt_password">Password *</label>
                            <input type="password" id="txt_password" name="txt_password" autoComplete="off"
                                   required="" placeholder="Password"/>
                            <img className="fa fa-password-lock"
                                 src="storage/password-lock.png"/>
                            <a href="#" onClick={this.props.changePageHandlar} className="change_forgot">forgot</a>
                        </li>
                        <li>
                            <ButtonWithIconOnHover childrenText="LOGIN" />
                        </li>

                    </ol>
                </div>
            </section>
        )
    }
}

export default LoginSection
