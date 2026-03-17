import React from 'react';
import Link from './Link';

const navigationData = [
    {
        id: 1,
        name: "Home",
        urlPath: "/"
    },
    {
        id: 2,
        name: "About",
        urlPath: "/about"
    },
    {
        id: 3,
        name: "Services",
        urlPath: "/services"
    },
    {
        id: 4,
        name: "Blog",
        urlPath: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        urlPath: "/contact"
    }
]

const NavBar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10' key={route.id}><a href="{route.urlPath}">{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;