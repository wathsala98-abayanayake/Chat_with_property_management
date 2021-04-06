import React, {Component} from "react";
import {browserHistory} from "react-router";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as AuthActions from "../action";
import {connect} from "react-redux";
import {Auth} from '../../Auth';
require('bootstrap/dist/css/bootstrap.min.css');
require('./Login.scss');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModal: false,
        }
    }

    handleChange(event) {
        const field = event.target.name;
        const inputs = this.props.authReducer.loginRequest;
        inputs[field] = event.target.value;

       this.props.setLoginRequest(inputs);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.authReducer.loginState === 1 && nextProps.authReducer.loginState === 2) {
            Auth.authenticateUser(nextProps.authReducer.login.token);
            Auth.currentUser((nextProps.authReducer.login.userId).toString());
            browserHistory.push('/')
            window.location.reload()
        }
    }

    signupModal() {
        browserHistory.push('/signUp')
    }
    login(){
        let variables = this.props.authReducer.loginRequest;
        console.log('var',variables);
        this.props.login(variables);

    }
    render() {
        console.log(Auth.isUserAuthenticated());
        let inputs = this.props.authReducer.loginRequest;
        return (
            <div className="container-fluid login" id="login-page">
                <div className="row">
                    <div className="col-xs-12">

                        <div className="col-sm-5">
                            <div className="col-xs-12 login-pad">

                                <div>
                                    <h4 className="text-center"><b>Sign in</b></h4>
                                    <div className="col-xs-12">
                                        <div className="group ">
                                            <label>
                                                E-Mail
                                            </label>
                                            <input type="text" name="email" value={inputs.email} onChange={this.handleChange.bind(this)}/>


                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                Password
                                            </label>
                                            <input type="password" name="password" value={inputs.password} onChange={this.handleChange.bind(this)}/>


                                        </div>
                                    </div>
                                    {this.props.authReducer.loginState === 3 &&
                                    <div className="col-xs-12">
                                        <div className="alert alert-danger">
                                            <strong>{this.props.authReducer.error}</strong>
                                        </div>
                                    </div>
                                    }
                                    <div>
                                        <div className="col-xs-6 col-sm-6 col-sm-offset-3">
                                            <button className='login-btn' onClick={this.login.bind(this)}>Login</button>
                                        </div>
                                        <div className="col-xs-6 col-sm-6">

                                        </div>
                                        <div className="col-md-12 grey pad link">
                                            Don't have an account? <span
                                            onClick={this.signupModal.bind(this)}>REGISTER</span>

                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 footer">Copyright © 2018 Student Network Systems Inc.</div>
                </div>

            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setLoginRequest:PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)

