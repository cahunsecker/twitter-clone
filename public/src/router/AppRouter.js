import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Twitter from '../components/Twitter';
import UserSignUpPage from '../components/UserSignUpPage';
import UserPage from '../components/UserPage';
import EditTweetPage from '../components/EditTweetPage';
import Header from '../components/Header';

const history = createHistory();


const AppRouter = () => (
    <BrowserRouter history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Twitter}/>
                <Route path="/user" component= {UserSignUpPage}/>
                <Route path="/userpage" component= {UserPage}/>
                <Route path="edittweet" component={EditTweetPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;