import React from 'react';
import './topbar.css';
import { FcSearch } from "react-icons/fc";
import { FaPersonBooth, FaBed } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import { RiChatSmileFill } from "react-icons/ri";

export default function Topbar() {
return (
<div className='topbarContainer'>
    <div className='topbarLeft'></div>
    <span className='logo'>Social Anxiety</span>
    <div className='topbarCenter'></div>
    <div className='topbarLinks'>
        <span className='topbarLink'>Home</span>
        <span className='topbarLink'>Timeline</span>
    </div>
    <div className='topbarIcons'>
        <div className='topbarIconItem'>
            <FaPersonBooth className='topbarIcon'/>
            <span className='topbarIconBadge'></span>
        </div>
        <div className='topbarIconItem'>
            <FaBed className='topbarIcon'/>
            <span className='topbarIconBadge'></span>
        </div>
        <div className='topbarIconItem'>
            <RiChatSmileFill className='topbarIcon'/>
            <span className='topbarIconBadge'></span>
        </div>
        <div className='topbarIconItem'>
            <MdNotificationImportant className='topbarIcon'/>
            <span className='topbarIconBadge'></span>
        </div>
    </div>
    <div className='topbarRight'></div>
    <div className='searchbar'>
        <FcSearch className='searchIcon'/>
        <input placeholder="From whom do you want to hide?!" className="searchInput"/>
    </div>
    <img src='./src/assets/Philip%20(1%20of%201).jpg' alt='profile' className='topbarImage'/>
</div>
)
}