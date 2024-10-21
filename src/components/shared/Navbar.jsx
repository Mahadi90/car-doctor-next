'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
   const session = useSession()
    return (
        <div className="navbar bg-base-100 text-slate-900 py-6 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navItems.map(item => <Link key={item.item} href={item.path}>{item.item}</Link>)
                        }
                    </div>
                </div>
                <Link href='/'>
                <Image style={{width : 'auto', height : 'auto'}} priority={true} alt="logo"  src="/assets/logo.svg" width={60} height={60} />
                </Link>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex space-x-8">
                    {
                        navItems.map(item => <Link key={item.item} href={item.path}>{item.item}</Link>)
                    }
                </div>
            </div>
            <div className="navbar-end flex space-x-4">
                <AiOutlineShoppingCart className="w-6 h-6"></AiOutlineShoppingCart>
                <IoSearchSharp className="w-6 h-6"></IoSearchSharp>
                <a className="btn btn-outline btn-primary">Appointment</a>
                {
                    session.data? <button className="btn btn-primary" onClick={() => signOut()}>Logout</button> :
                    <Link href='/login' className="btn btn-primary">Login</Link>
                }
            </div>
        </div>
    );
};

const navItems = [
    {
        path: '/',
        item: 'Home',
    },
    {
        path: '/about',
        item: 'About',
    },
    {
        path: '/services/635a0c0b64a6d231228942ae',
        item: 'Service',
    },
    {
        path: '/blog',
        item: 'Blog',
    },
    {
        path: '/contact',
        item: 'Contact',
    }
]

export default Navbar;