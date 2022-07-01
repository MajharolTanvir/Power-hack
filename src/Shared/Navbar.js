import { parse } from 'postcss';
import React from 'react';

const Navbar = ({ bills, refetch }) => {

    const amount = bills.map(bill => (bill.amount))
    // console.log(amount);

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6  text-center">
                <button className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse md:flex md:justify-between items-center" id="navbarSupportedContent1">
                    <a className="text-xl text-white hover:opacity-80 focus:opacity-80 pr-2 md:text-start font-bold" href="/">Power hack</a>
                    <ul className="navbar-nav flex md:text-center flex-col pl-0 list-style-none mx-auto">
                        <li className="nav-item p-2">
                            <a className="nav-link hover:opacity-80 focus:opacity-80 text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link text-white hover:opacity-80 focus:opacity-80 p-0" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p>Paid Amount: 0</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;