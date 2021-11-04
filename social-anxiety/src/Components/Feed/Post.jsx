import React from 'react';
import './Post.css';
import {FiMoreVertical} from "react-icons/fi";
import {AiFillLike} from "react-icons/ai";
import {GiTentacleHeart} from "react-icons/gi";
import {Users} from '../../dummydata';

export default function
    Post({post}) {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=''
                             className='postProfileImg'/>
                        <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <FiMoreVertical/>
                </div>
                <div className="postCenter">
                    <span className='.postText'>Dummy Post</span>
                    <img src={post.photo} alt="" className='postImg'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <AiFillLike className='likeIcon'/>
                        <GiTentacleHeart className='heartIcon'/>
                        <span className='postLikeCounter'>{post.like}</span>
                    </div>
                    <div className="postBottomRight"></div>
                    <span className='postCommentText'>{post.comment}</span>
                </div>
            </div>
        </div>
    );
}

