import React from 'react';
import Share from './Feed/share';
import Post from './Feed/Post';
import './feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                <Post/>
            </div>
        </div>
    );
}

export default Feed;