import React, { Component } from 'react'
import '../../../sass/components/login/login.scss'

class ForgetSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="hidden forgot_form">
                <div className="login_box">
                    <ol>
                        <li><input type="text" id="username" name="username" autoComplete="off" required=""
                                   placeholder="Your Email Address" /></li>
                        <li>
                            <button type="submit"><span>Change your password</span></button>
                        </li>
                        <li className="text-center">
                            <a href="#" onClick={this.props.changePageHandlar} className="change_login">login</a>
                        </li>
                    </ol>
                </div>
            </section>
        )
    }
}

export default ForgetSection
