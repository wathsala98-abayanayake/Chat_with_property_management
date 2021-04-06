import React from 'react';
import {browserHistory, Route, Router} from 'react-router';
import {Provider} from 'react-redux';
import Login from './Main/components/Login'
import SignUp from './Main/components/SignUp'
import MainNav from './MainNav/components/MainNav'
import DetailView from './MainNav/components/DetailView'
import Card from './MainNav/components/HomeCard'
import Profile from './MainNav/components/Profile'
import admin from './MainNav/components/Admin'
import store from './store';
import CreatePost from "./MainNav/components/createPost";
import EditPost from "./MainNav/components/Edit";
import createOrder from "./MainNav/components/createOrder";

export default (
    <Provider store={store}>

<div>
    <MainNav/>
            <Router
                history={browserHistory}
                routes={
                    <Route>
                            <Route name="Card" path="/" component={Card}/>
                            <Route name="DetailView" path="/detailView/:_id" component={DetailView}/>
                            <Route name="Profile" path="/profile" component={Profile}/>
                            <Route name="Admin" path="/admin" component={admin}/>
                            <Route name="CreatePost" path="/createPost" component={CreatePost}/>
                            <Route name="EditPost" path="/edit" component={EditPost}/>
                            <Route name="CreateOrder" path="/createOrder/:_id" component={createOrder}/>
                            <Route name="Login" path="/login" component={Login}/>
                            <Route name="SignUp" path="/signUp" component={SignUp}/>

                    </Route>

                }/>
</div>
    </Provider>
);