import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as mainNavActions from '../actions'
import {bindActionCreators} from 'redux'
import {t} from 'typy';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {browserHistory} from "react-router";

class admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postStatus:"pending"
        };
        this.pendingList = this.pendingList.bind(this);
        this.completedList = this.completedList.bind(this);
        this.rejectedList = this.rejectedList.bind(this);
    }

    pendingList(){
        this.setState({postStatus:"pending"})
    }

    completedList(){
        this.setState({postStatus:"completed"})
    }

    rejectedList(){
        this.setState({postStatus:"rejected"})
    }

    liveList(){
        this.setState({postStatus:"live"})
    }
    updateStatus(a){
        let post = {...this.props.postReducer.postReq};
        // post.author =sessionStorage.getItem('user').toString()
        // post.author ="60660a75ddfbfd6b285f58de"
        // Object.values(t(this.props.postReducer, 'postList').safeObject).map(a=>a.author._id);
        // "5c8b39832e8b2b3d88294aa7";
        post._id = a._id;
        post.title = a.title;
        post.descrition = a.descrition;
        post.address = a.address;
        post.guest = a.guest;
        post.bedrooms = a.bedrooms;
        post.beds = a.beds;
        post.bathrooms = a.bathrooms;
        post.published = a.published;
        post.status = 'Approved';
        console.log(post, 'post');
        this.props.updatePost(post);

    }

    rejectPost(a){
        let post = {...this.props.postReducer.postReq};
        // post.author =sessionStorage.getItem('user').toString()
        // post.author ="60660a75ddfbfd6b285f58de"
        // Object.values(t(this.props.postReducer, 'postList').safeObject).map(a=>a.author._id);
        // "5c8b39832e8b2b3d88294aa7";
        post._id = a._id;
        post.title = a.title;
        post.descrition = a.descrition;
        post.address = a.address;
        post.guest = a.guest;
        post.bedrooms = a.bedrooms;
        post.beds = a.beds;
        post.bathrooms = a.bathrooms;
        post.published = a.published;
        post.status = 'rejected';
        this.props.updatePost(post);
    }

    componentDidMount() {
        this.props.fetchPost();
    }

    detailpage(a){
        const id = a._id;
        browserHistory.push(`/detailView/${id}`);
    }
    render() {
        let {postReducer} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group btn-group-justified">
                            <a href="#" className="btn btn-primary" onClick={this.pendingList}>Pending</a>
                            <a href="#" className="btn btn-primary" onClick={this.completedList}>Completed</a>
                            <a href="#" className="btn btn-primary" onClick={this.rejectedList}>Rejected</a>
                        </div>
                    </div>

                    <div className="row top-10">
                        <div className="col-md-12">

                            {
                                this.state.postStatus === "pending" && Object.values(t(postReducer, 'postList').safeObject).filter(b => b.status === 'new')
                                .map((a) => {
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
                                                    <div className="card-text col-md-12">
                                                        <h5 className="card-title"><span
                                                            className="text-gray">Details :</span> {a.guest} guest can stay</h5>
                                                        <h5 className="card-title"><span
                                                            className="text-gray">Status :</span> Unfunished, immidiatly
                                                            Available</h5>

                                                        <h5 className="card-title"><span
                                                            className="text-gray">Post Status :</span><span className="text-red">{a.status}</span></h5>
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

                            {
                                this.state.postStatus === "completed" && Object.values(t(postReducer, 'postList').safeObject).filter(b => b.status === 'Approved')
                                    .map((a) => {
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
                                                            <div className="card-text col-md-12">
                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Details :</span> {a.guest} guest can stay</h5>
                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Status :</span> Unfunished, immidiatly
                                                                    Available</h5>

                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Post Status :</span><span className="text-red">{a.status}</span></h5>
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

                            {
                                this.state.postStatus === "rejected" && Object.values(t(postReducer, 'postList').safeObject).filter(b => b.status === 'rejected')
                                    .map((a) => {
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
                                                            <div className="card-text col-md-12">
                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Details :</span> {a.guest} guest can stay</h5>
                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Status :</span> Unfunished, immidiatly
                                                                    Available</h5>

                                                                <h5 className="card-title"><span
                                                                    className="text-gray">Post Status :</span><span className="text-red">{a.status}</span></h5>
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
                    </div>
                </div>
            </div>

        )
    }
}

admin.propTypes = {
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
)(admin)

