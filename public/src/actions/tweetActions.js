export const sendTweet = ({userName, message, likeCount}) => ({
    type: 'SEND_TWEET',
    tweet:{
        userName,
        message,
        likeCount
    },
});

export const editTweet = ({tweet, updates}) => ({
    type: 'EDIT_TWEET',
    ...tweet,
    ...updates
});

export const removeTweet = (message) => ({
    type: 'REMOVE_TWEET',
    message
});

export const addLike = ({tweet, likeCount}) => ({
    type: 'ADD_LIKE',
    ...tweet,
    likeCount
})