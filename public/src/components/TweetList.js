import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import TweetForm from './TweetForm';
import LikeButton from './LikeButton';
import RemoveButton from './RemoveButton';

const TweetList = (props) => (
    props.tweets.length === 0 ? 
    (<h2>There are no tweets yet</h2>) : 
    (props.tweets.map((tweet) => 
    <div>
        <Tweet {...tweet}/>
        <LikeButton {...tweet} />
        <RemoveButton {...tweet}/>
    </div>
    
    ))
);

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets,
        users: state.users
    }
}



export default connect(mapStateToProps)(TweetList);