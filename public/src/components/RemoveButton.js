import React from 'react';
import {removeTweet} from '../actions/tweetActions';
import { connect } from 'react-redux';

export class RemoveButton extends React.Component{
    constructor(props){
        super(props);

        this.state={
            
            message: props.message,
            userName: props.userName

        }


    }
    

    onRemove = () => {
     
            console.log('Removing');
            const message = this.state.message;
            this.props.removeTweet(message);
        
     

    }

    render(){
        return(
            <div>
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeTweet: (tweet) => dispatch(removeTweet(tweet))
});

const mapStateToProps = (state) => ({
    userName: state.userName
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);