import {connect} from 'react-redux';
import React from 'react';
import {sendTweet} from '../actions/tweetActions';
import {setUser} from '../actions/userActions';
import TweetForm from './TweetForm';

export class ComposeTweetPage extends React.Component {
    onSubmit = (tweet) => {
        console.log('Composing tweet:', tweet);
        this.props.sendTweet({...tweet});
        this.props.setUser({...tweet});
        //this.props.history.push('/');
      };
      render() {
        return (
          <div>
            <h3>Send Tweet</h3>
            <TweetForm
              onSubmit={this.onSubmit}
              user={this.props.user}
            />
          </div>
        );
      }
    }
    
const mapDispatchToProps = (dispatch) => ({
      sendTweet: (tweet) => dispatch(sendTweet(tweet)),
      setUser: (userName) => dispatch(setUser(userName))
    });

    
export default connect(undefined, mapDispatchToProps)(ComposeTweetPage);

