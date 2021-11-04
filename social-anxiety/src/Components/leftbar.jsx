import React from 'react';
import './leftbar.css';
import {ImFeed} from "react-icons/im";
import {RiChatSmileFill} from "react-icons/ri";
import {FaPhotoVideo, FaQuestion} from "react-icons/fa";
import {GrGroup} from "react-icons/gr";
import {SiHatenabookmark} from "react-icons/si";
import {GiHammerDrop, GiPartyPopper} from "react-icons/gi";
import {IoMdSchool} from "react-icons/io";

function Leftbar() {
    return (
        <div className='leftbar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <il className='sidebarListItem'>
                        <ImFeed classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </il>
                    <il className='sidebarListItem'>
                        <RiChatSmileFill classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </il>
                    <il className='sidebarListItem'>
                        <FaPhotoVideo classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Media</span>
                    </il>
                    <il className='sidebarListItem'>
                        <GrGroup classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </il>
                    <il className='sidebarListItem'>
                        <SiHatenabookmark classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </il>
                    <il className='sidebarListItem'>
                        <FaQuestion classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </il>
                    <il className='sidebarListItem'>
                        <GiHammerDrop classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </il>
                    <il className='sidebarListItem'>
                        <GiPartyPopper classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </il>
                    <il className='sidebarListItem'>
                        <IoMdSchool classname='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </il>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    <il className="sidebarFriend">
                        <img className="sidebarFriendImg" src='' alt=''/>
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </il>
                </ul>
            </div>
        </div>
    );
}

export default Leftbar;