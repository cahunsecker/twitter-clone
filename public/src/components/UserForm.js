import React from 'react';

export default class UserForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName: props.user ? props.user.userName : '',
            bio: props.user ? props.user.bio : '',
            userID: props.user ? props.user.userID : '',
            error: ''
        };
    }

    onUserNameChange = (e) => {
        const userName = e.target.value;
        this.setState(({userName}));
    };

    onBioChange = (e) => {
        const bio = e.target.value;
        this.setState(({bio}))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!userName){
            this.setState(({error: 'Please enter a username'}))
        } else {
            this.props.onSubmit({
                userName: this.state.userName,
                bio: this.state.bio,
                userID: this.state.userID
            });
        }
    }

    render(){
        return(

            <div>
                <h2>Create a User</h2>
                <form onSubmit={this.onSubmit}>
                 <div>
                     <input value={this.state.userName} placeholder='User Name' onChange={this.onUserNameChange}></input>
                 </div>
                 <div>
                    <textarea value={this.state.bio} placeholder = 'Bio' onChange={this.onBioChange}></textarea>
                 </div>
                </form>
            </div>
        )
        
    }
}