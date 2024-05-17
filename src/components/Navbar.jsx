import React, { useContext, useEffect, useState } from 'react';
import { navLinks } from '../constants'
import { Camera, AlignLeft, X } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
import * as Icon from 'react-feather'



const Navbar = () => {
//   const { addToCart, cart, getCartTotal, getTotalQuantity } = useContext(CartContext);
  const navigate = useNavigate()
  const [logstate, setLogstate] = useState('');

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
       ? setStickyClass('fixed transition-transform ease-linear top-0 left-0 z-50 bg-primary smooth md:px-9 px-2') : setStickyClass('relative');
    }
  };

  useEffect(() => {
    const mystate = localStorage.getItem('logstate');
    setLogstate(mystate);
  }, [])

//   const handleLogout = () => {
//     // Perform logout actions, such as clearing token from localStorage
//     localStorage.removeItem('token');
//     localStorage.removeItem('logstate');
//     localStorage.removeItem('user');
//     console.log("user logged out")
//     navigate('/login')

//   };
  const [toggle, setToggle] = useState(false);
  return (
    <nav id="navbar" className={`top-0 flex justify-between items-center navbar fixed start-0 z-50 w-full ${stickyClass}`}>
      <div className="flex-row space-x-3 flex py-2 justify-between items-center">
        <Link to="/">
          <img src='images/skillogo.png' className='w-[50px] h-[50px]' alt="" />
          </Link>
          <h1 className="text-[30px] font-bold text-black">SkillsMasters</h1>
        
      </div>



      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black mr-10
          `}
          >
            <Link to={`${nav.id}`} className="text-black font-normal px-3 py-2 rounded-md text-sm">
              {nav.name}
            </Link>
          </li>
        ))}

        

        



      </ul>

      <div className="md:hidden justify-end items-center flex"
      >

        <div onClick={() => setToggle(prev => !prev)} className="cursor-pointer">
          {toggle ? <X color='white' size={30} /> : <AlignLeft color='white' size={30} />}
        </div>


        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none items-center flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black mr-10`}
              >
                <Link to={`${nav.id}`}>
                  {nav.name}
                </Link>
              </li>
            ))}
            

          </ul>
        </div>

      </div>

    </nav>


  );
}

export default Navbar;