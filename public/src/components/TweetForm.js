import React from 'react'

export default class TweetForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            userID: props.user ? props.user.userID : '',
            id: props.tweet ? props.tweet.id : '',
            message: props.tweet? props.tweet.message : '',
            likeCount: 0,
            error: '',
        }
    };

    onMessageChange = (e) => {
        const message = e.target.value;
        this.setState(({message}))
    };

    onUserNameChange = (e) => {
        const userName = e.target.value;
        console.log(userName);
        this.setState(({userName}));
        
    }
    

    onSubmit = (e) => {
        e.preventDefault();

        console.log('Tweet form submitted');

        console.log('Message:', this.state.message);

            this.setState(({error: ''}));
            this.props.onSubmit({
                userName: this.state.userName,
                message: this.state.message,
                likeCount: this.state.likeCount
            })
        

    };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder='Username' onChange={this.onUserNameChange}></input>
                    <textarea placeholder='message' onChange={this.onMessageChange}></textarea>
                    <button>Send</button>
                </form>
            </div>  
        )
        
    }

}
    
