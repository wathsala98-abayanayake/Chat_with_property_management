import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as ProfileActions from '../actions'
import {bindActionCreators} from 'redux'
import {t} from 'typy';

class profile extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        let {profileReducer} = this.props.profileReducer;

        return (
            <div className="container">
                <table className="table table-bordered">

                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                    </thead>

                    {
                        Object.values(t(profileReducer, 'userList').safeObject)
                            .map((a) => {
                                    return <tbody>
                                    <tr>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>
                                        <td>{a.age}</td>
                                    </tr>
                                    </tbody>


                                }
                            )
                    }
                </table>
            </div>

        )
    }
}

profile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        profileReducer: state,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProfileActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(profile)

