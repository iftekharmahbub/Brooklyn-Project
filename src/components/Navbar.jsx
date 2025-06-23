import React, { useState } from 'react'
import Button from '../utils/Button';
import { TiThMenu } from 'react-icons/ti';
import { MdOutlineClose } from 'react-icons/md';


const Navbar = () => {

  // Menu links
  const [active, setActive] = useState(false);

  const menulinks = [
    {
      title: 'Home',
      url: '#',
    },
    {
      title: 'About',
      url: '#',
    },
    {
      title: 'Process',
      url: '#',
    },
    {
      title: 'Portfolio',
      url: '#',
    },
    {
      title: 'Blog',
    },
    {
      title: 'Services',
      url: '#',
    },
  ]

  return (
    <>
      <nav>
        <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
          <div className="logo ps-3.5 lg:ps-0 py-5 items-center">
            <a href="#">
              <img src="/public/images/logo.png" alt="" />
            </a>
          </div>

          <div className="navLinks hidden lg:grid items-center justify-start lg:justify-end lg:col-span-2">
            <ul className="flex justify-end items-center">
              {menulinks.map((link, index) => (
                <li key={index}>
                  <a
                    key={link.title}
                    href={link.url || '#'}
                    className="font-medium text-[16px] leading-[150%] text-[#333] py-3 px-6"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <Button>Contact</Button>
            </ul>
          </div>

          {/* menu icon */}
          <div className="Icon text-end lg:hidden cursor-pointer">
            <button>
              <TiThMenu className="text-3xl cursor-pointer"
              onClick={() => setActive(!active)}/>
            </button>
          </div>

          {/* mobile menu */}
          <div
            className={`menu ${
              active ? '-scale100' : '-scale-0'
            } visible lg:hidden fixed lg:static bg-gray-700/50 lg:bg-transparent inset-0`}
          >
            <ul
              className=" relative bg-flex justify-end gap-10 h-full 
            lg:h-auto lg:max-w-auto bg-white max-w-3/4 text-center py-8"
            >
              {menulinks.map((link, index) => (
                <li key={index}>
                  <a
                    key={link.title}
                    href={link.url || '#'}
                    className="font-medium p-5 inline-block text-[16px] leading-[150%] text-[#333] lg:py-3 lg:px-6"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <Button>Contact</Button>
            </ul>
            <span className="closeIcon text-3xl inline-block lg:hidden cursor-pointer absolute top-5 right-65"
              onClick={() => setActive(!active)}>
              <MdOutlineClose />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
