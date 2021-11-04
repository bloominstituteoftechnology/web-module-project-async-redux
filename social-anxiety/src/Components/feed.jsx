import React from 'react';
import Share from './Feed/share';
import Post from './Feed/Post';
import {Users, Posts} from '../dummydata';
import './feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    );
}

export default Feed;