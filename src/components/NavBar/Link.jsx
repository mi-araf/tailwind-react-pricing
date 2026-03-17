import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='lg:mr-10 px-8 py-2 hover:bg-amber-900 cursor-pointer'>
           <a href={route.urlPath}>{route.name}</a> 
        </li>
    );
};

export default Link;