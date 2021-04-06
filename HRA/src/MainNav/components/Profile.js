import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as mainNavActions from "../actions";
import {bindActionCreators} from 'redux'
import {t} from 'typy';
import {browserHistory} from "react-router"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {Auth} from '../../Auth'

class profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myList:"post"
        };
        this.liveList = this.liveList.bind(this)
    }

processList(){
        this.setState({postStatus:"process"})
}

liveList(){
        this.setState({postStatus:"live"})
}
    createPage(){
        if(Auth.isUserAuthenticated()){
            browserHistory.push('/createPost')
        }
        if(Auth.isUserAuthenticated() !== true){
            browserHistory.push('/login')
        }

    }

    componentDidMount() {
        this.props.fetchPost();
        this.props.fetchOrder();
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

    updatePostPage(a){
        browserHistory.push("/edit")
    }

    detailpage(a){
        const id = a._id;
        browserHistory.push(`/detailView/${id}`);
    }

    showOrders(){
        this.setState({myList:'orders'})
    }
    showPost(){
        this.setState({myList:'post'})
    }
    render() {
        const {classes, postList} = this.props;
        let {postReducer} = this.props;
        let commentReq = postReducer.commentReq;
        // let mario = postList.find(a => a._id);
        console.log(Object.values(t(postReducer, 'orderList').safeObject).map(a => a._id), 'mario');

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2>My Property List</h2>
                    </div>
                    <div className="col-md-5">
                        {
                            this.state.myList === 'post' &&
                            <button className="btn btn-primary pull-right create-btn" onClick={this.createPage.bind(this)}>Create</button>

                        }

                    </div>

                    <div className="col-md-12">
                        <div className="btn-group btn-group-justified">
                            <a href="#" className="btn btn-primary" onClick={this.showPost.bind(this)}>My Post</a>
                            <a href="#" className="btn btn-primary" onClick={this.showOrders.bind(this)}>My Orders</a>
                        </div>
                    </div>

                    <div className="row top-10">
                        <div className="col-md-12">
                            {
                                this.state.myList === 'orders' && Object.values(t(postReducer, 'orderList').safeObject)
                                    .filter(b => b.post.author._id === sessionStorage.getItem('user').toString())
                                    .map((a) => {
                                        return <div className="row">

                                            <div className="col-md-12 top-10">
                                                <div className="well well-lg">

                                                    <div className="col-md-3"><span>Booked By :</span>{a.author.name}</div>
                                                    <div className="col-md-2"><span>From :</span>{a.inDate}</div>
                                                    <div className="col-md-2"><span>To :</span>{a.outDate}</div>
                                                    <div className="col-md-2"><span>Guest :</span>{a.guest}</div>
                                                    <div className="col-md-2"><span>Mobile :</span>0768032221</div>

                                                </div>
                                            </div>
                                        </div>
                                    })
                            }

                                {
                                  this.state.myList === 'post' && Object.values(t(postReducer, 'postList').safeObject)
                                       .filter(b => b.author._id === sessionStorage.getItem('user').toString())
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

                            {/*{*/}
                                {/*this.state.postStatus === "process" && Object.values(t(postReducer, 'postList').safeObject).filter(b => b.status === 'new')*/}
                                    {/*.map((a) => {*/}
                                        {/*return <div className="list-group">*/}
                                            {/*<div className="col-md-10">*/}
                                                {/*<a href="#" className="list-group-item">{a.title}</a>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-md-1">*/}
                                                {/*<a href="#" className="list-group-item">{a.title}</a>*/}
                                            {/*</div>*/}

                                            {/*<div className="col-md-1">*/}
                                                {/*<button type="button" className="btn btn-primary pull-right" onClick={this.updatePostPage.bind(this)}>EDIT</button>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*})*/}
                            {/*}*/}




                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
profile.propTypes = {
    classes: PropTypes.object.isRequired,
    mutateComment: PropTypes.func.isRequired,
    setComment: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    fetchOrder: PropTypes.func.isRequired,
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
)(profile)

