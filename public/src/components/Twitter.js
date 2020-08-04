import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import TweetList from './TweetList';
import ComposeTweetPage from './ComposeTweetPage';
import sendTweet from '../actions/tweetActions';
import {connect} from 'react-redux';
import UserPage from '../components/UserPage';

const Twitter = () => (
  

    <div>
        <div>
        </div>
            <ComposeTweetPage />
        <div>
        </div>
        <div className="container">
            <TweetList/>
        </div>
    </div>
    )
    
export default Twitter;



