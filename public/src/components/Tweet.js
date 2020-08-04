import React from 'react';
import {Link} from 'react-router-dom';

const Tweet = (props) => (
    <div>
        <div>
            <Link to="/edittweet">
                <h3>{props.userName}</h3>
            </Link>
            
        </div>
        <div>
            <p>{props.message}</p>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>
    
);

export default Tweet;