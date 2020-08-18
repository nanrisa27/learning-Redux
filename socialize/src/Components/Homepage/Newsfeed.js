import React from 'react';
import AllPosts from '../Posts/AllPosts';
import { Redirect } from 'react-router-dom';

const Newsfeeds = (props) => (
    <div className="container">
        { props.uid ? <AllPosts/> : <Redirect to="/login"/>}      
    </div>
    
)

export default Newsfeeds;
