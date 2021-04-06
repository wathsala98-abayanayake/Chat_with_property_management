import React from 'react';
import {browserHistory} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as mainNavActions from "../actions";
import {connect} from "react-redux";
import {t} from "typy";


class Card extends React.Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    detailpage(a){
        const id = a._id;
        browserHistory.push(`/detailView/${id}`);
    }
    render() {
        let {postReducer} = this.props;
        console.log(Object.values(t(postReducer, 'postList').safeObject).map(a => a.author.name), 'mario');
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>9064 Properties for sale</h2>
                    </div>
                </div>
                {
                    Object.values(t(postReducer, 'postList').safeObject).filter(b => b.status === 'Approved').map((a) =>
                    {
                        return <div className="row top-10">
                            <div className="card mb-3 testt">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                            alt="..."
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="col-md-4">
                                                <h5 className="card-title">{a.title}</h5>
                                            </div>
                                            <div className="col-md-8">
                                                <h5 className="card-title pull-right">5000 LKR / night</h5>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="card-title text-gray">By {a.author.name}</h5>
                                            </div>
                                            <div className="card-text col-md-12 top-5">
                                                <h5 className="card-title"><span
                                                    className="text-gray">Details :</span> {a.guest} guest can stay</h5>
                                                <h5 className="card-title"><span
                                                    className="text-gray">Status :</span> Unfunished, immidiatly
                                                    Available</h5>
                                            </div>

                                            <div className="col-md-2 top-25 date">

                                                <p><span><FontAwesomeIcon icon={faCoffee}/></span> {a.beds} Beds</p>
                                            </div>

                                            <div className="col-md-3 top-25 date">
                                                <p><span><FontAwesomeIcon icon={faCoffee}/></span> {a.bedrooms} Bedrooms</p>
                                            </div>

                                            <div className="col-md-3 top-25 date">
                                                <p><span><FontAwesomeIcon icon={faCoffee}/></span> {a.bathrooms} Bathrooms</p>
                                            </div>
                                            <div className="col-md-3 top-20">
                                                <button className="btn background-orange card-btn" onClick={this.detailpage.bind(this,a)}>View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        )
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
    mutateComment: PropTypes.func.isRequired,
    setComment: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    clearComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,

};


function mapStateToProps(state) {
    return {
        postReducer: state.postReducer,
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mainNavActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card)
