import React from 'react';
import './rightbar.css';
import {Users} from '../dummydata';

function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="" alt=""/>
                    <span className='birthdayText'></span>
                </div>
                <img className='rightbarAd' src="" alt=""/>
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="" alt=""/>
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;