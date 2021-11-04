import React from 'react';
import './share.css';
import {FaPhotoVideo, FaTags, FaLocationArrow} from "react-icons/fa";
import {BsFillEmojiDizzyFill} from "react-icons/bs";

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src='' alt='' className='shareProfileImg'/>
                    <input placeholder="Tell people what they don't care about anyway. Go ahead. I dare you!"
                           className='shareInput'/>
                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <FaPhotoVideo htmlColor="Orange" className='shareIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <FaTags htmlColor="Blue" className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <FaLocationArrow htmlColor="red" className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <BsFillEmojiDizzyFill htmlColor="Green" className='shareIcon'/>
                            <span className='shareOptionText'>Emotions</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
