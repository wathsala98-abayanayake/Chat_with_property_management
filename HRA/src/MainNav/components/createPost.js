import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import * as PostActions from "../actions";
import {t} from 'typy';

class CreatePost extends Component {

    postTheContent() {
        let post = {...this.props.postReducer.postReq};
        post.author =sessionStorage.getItem('user').toString()
        // Object.values(t(this.props.postReducer, 'postList').safeObject).map(a=>a.author._id);
        // "5c8b39832e8b2b3d88294aa7";
        post.published = true;
        post.status = 'new';
        this.props.mutatePost(post);
        console.log(post,'post');
        if(this.props.postReducer.postFetchState === 2) {
            // window.location.reload()
            return this.props.clearPost()
        }
    }

    onChange(event) {
        const field = event.target.name;
        // const image = event.target.files[0]
        let setPost = {...this.props.postReducer.postReq};
        setPost[field] = event.target.value;
        // console.log(event.target.files[0], 'post');
        console.log(setPost,'setPost');
        this.props.setPost(setPost);
    }

    render(){
        const { classes } = this.props;
        let {postReducer} = this.props;
        let postReq = postReducer.postReq;

        return (
            <div className="container">
                <h2>Horizontal form</h2>
                {/*<form className="form-horizontal">*/}
                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                onChange={this.onChange.bind(this)}
                                value={postReq.title}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Description" name="description" onChange={this.onChange.bind(this)}
                                   value={postReq.description}/>
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Address"
                                   name="address" onChange={this.onChange.bind(this)}
                                   value={postReq.address}/>
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Guest"
                                   name="guest" onChange={this.onChange.bind(this)}
                                   value={postReq.guest}/>
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Bedrooms"
                                   name="bedrooms" onChange={this.onChange.bind(this)}
                                   value={postReq.bedrooms}/>
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Beds"
                                   name="beds" onChange={this.onChange.bind(this)}
                                   value={postReq.beds}/>
                        </div>
                    </div>

                    <div className="form-group">
                        {/*<label className="control-label col-sm-2" htmlFor="email">Title:</label>*/}
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Bathrooms"
                                   name="bathrooms" onChange={this.onChange.bind(this)}
                                   value={postReq.bathrooms}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={this.postTheContent.bind(this)}>Submit</button>
                        </div>
                    </div>
                {/*</form>*/}
            </div>
        )
    }
}

CreatePost.propTypes = {
    classes: PropTypes.object.isRequired,
    mutatePost: PropTypes.func.isRequired,
    setPost: PropTypes.func.isRequired,
    clearPost: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
};



function mapStateToProps(state) {
    return {
        postReducer: state.postReducer,
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PostActions, dispatch)
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreatePost);


