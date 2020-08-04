import React from 'react';
import {addLike} from '../actions/tweetActions';
import { connect } from 'react-redux';

export class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likeCount: props.likeCount,
            userName: props.userName
        }
    }

    onLike = () => {

            console.log('Liked');
            const likeCount = this.state.likeCount + 1
            this.setState(()=>({likeCount}));
            this.props.addLike({tweet:props.tweet, likeCount:this.state.likeCount});
        
      
    }

    render(){
        return(
            <div>
                <button onClick={this.onLike}>Like ({this.state.likeCount})</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addLike: (tweet, likeCount) => dispatch(addLike(tweet, likeCount))
});

const mapStateToProps = (state) => ({
    userName: state.userName
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)