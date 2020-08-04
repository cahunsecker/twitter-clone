const defaultTweets = [{id: 101, userName: 'Aden', message: 'this is my first fake tweet!', likeCount:0}];

const tweetReducer = (state=defaultTweets, action) => {
    switch (action.type){
        case 'SEND_TWEET': 
            console.log('sending tweet...');
            console.log(action.tweet);
            return [...state, action.tweet];
        case 'EDIT_TWEET':
            return state.map((tweet) => {
                if (tweet.id === action.id){
                    return {
                        ...tweet,
                        ...action.updates
                    }
                }
            })
        case 'REMOVE_TWEET':
            console.log('Removing tweet:', action.message)
            return state.filter((tweet) => tweet.message != action.message)
        case 'ADD_LIKE':
            console.log('Add like running in reducer');
            return state.map((tweet)=> {
                if (tweet.message === action.message){
                    const likeCount = tweet.likeCount + 1;
                    return{
                        ...tweet,
                        likeCount
                    }
                }
            })
        default: 
            return state;
    }
}

export default tweetReducer;