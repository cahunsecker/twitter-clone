import TweetList from './TweetList';
import ComposeTweetPage from './ComposeTweetPage';
import UserForm from './UserForm';
import React from 'react';

const userPage = (props) => (
    <div>
        <div>
            <UserForm />
        </div>
        <div>
            <ComposeTweetPage user={props.user}/> 
        </div>
        
    </div>
);

export default userPage;