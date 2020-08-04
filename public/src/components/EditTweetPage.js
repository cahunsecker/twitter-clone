import React from 'react';
import { ComposeTweetPage }  from './ComposeTweetPage';

const EditTweetPage = (props) => {
    return(
        <div>
            <ComposeTweetPage {...props.tweet}/>
        </div>
    )
};

export default EditTweetPage;