import React from 'react';
import Topbar from '../Components/topbar';
import Leftbar from '../Components/leftbar';
import Feed from '../Components/feed';
import Rightbar from '../Components/rightbar';
import './home.css';

export default function Home() {
    return (
        <div>
            <Topbar/>
            <div className='homeContainer'>
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
}