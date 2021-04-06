import React from 'react';
import {browserHistory} from "react-router"
import {Auth} from '../../Auth'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as ProfileActions from "../../Profile/actions";
import {bindActionCreators} from 'redux'
import {t} from "typy";
class MainNav extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    homePage(){
        browserHistory.push('/')
    }

    profilePage(){
        browserHistory.push('/profile')
    }

    adminPage(){
        browserHistory.push('/admin')
    }
    loginModalPage(){
        browserHistory.push('/login')
    }

    signUpModalPage(){
        browserHistory.push('/signUp')
    }

    loginOut(){
        Auth.deAuthenticateUser();
        Auth.removeCurrentUser();
        browserHistory.push('/');
        window.location.reload()
    }
    render() {
        let {profileReducer} = this.props;

        // console.log(sessionStorage.getItem('user').toString(), 'currentuser');
        let currentUser = Auth.isUserAuthenticated() && Object.values(t(profileReducer, 'userList').safeObject).find(a => a._id === sessionStorage.getItem('user').toString())
        return (
            <div>
                <nav className="navbar desktop-only">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">HRA</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#" onClick={this.homePage.bind(this)}>Home</a></li>
                            {/*<li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Profile*/}
                                {/*1 <span className="caret"></span></a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li>Profile</li>*/}
                                    {/*<li>Admin</li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            <li><a href="#" onClick={this.profilePage.bind(this)}>My Properties</a></li>
                            <li><a href="#" onClick={this.adminPage.bind(this)}>Admin Panel</a></li>
                        </ul>

                            {
                                Auth.isUserAuthenticated() !== true &&
                                <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.signUpModalPage.bind(this)}><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#" onClick={this.loginModalPage.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                </ul>
                            }

                        {
                            Auth.isUserAuthenticated() === true &&
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> {t(currentUser,'name').safeObject}</a></li>
                                <li><a href="#" onClick={this.loginOut.bind(this)}><span className="glyphicon glyphicon-log-in"></span> LOG OUT</a></li>
                            </ul>
                        }


                    </div>
                </nav>

            </div>

        );
    }
}





MainNav.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        profileReducer: state.profileReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProfileActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainNav);
