import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

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
    const [open, setOpen] = useState(false);

    const Links = navigationData.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className='flex justify-between items-center mx-10 mt-3'>
            <span className='flex' onClick={() => setOpen(!open)}>
                { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu> }

                <ul className={`md:hidden absolute duration-1000 z-99 ${open ? 'top-12' : '-top-54' } bg-amber-700`}>
                    {Links}
                </ul>
                <h3 className='ml-5'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {Links}
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

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;