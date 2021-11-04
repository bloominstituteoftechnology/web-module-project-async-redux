import React from 'react';
import './Post.css';
import {FiMoreVertical} from "react-icons/fi";
import {AiFillLike} from "react-icons/ai";
import {GiTentacleHeart} from "react-icons/gi";

const Post = () => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src='' alt='' className='postProfileImg'/>
                        <span className='postUsername'></span>
                        <span className='postDate'></span>
                    </div>
                    <div className="postTopRight"></div>
                    <FiMoreVertical/>
                </div>
                <div className="postCenter">
                    <span className='.postText'>Dummy Post</span>
                    <img src="" alt="" className='postImg'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <AiFillLike className='likeIcon'/>
                        <GiTentacleHeart className='heartIcon'/>
                        <span className='postLikeCounter'></span>
                    </div>
                    <div className="postBottomRight"></div>
                    <span className='postCommentText'></span>
                </div>
            </div>
        </div>
    );
};

export default Post;
