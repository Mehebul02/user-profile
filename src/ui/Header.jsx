import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/logo.png'
import Container from './Container';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useState } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
//         <div className='bg-primaryColor '>
       
// <div className="navbar max-w-screen-xl mx-auto">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//       <AiOutlineMenu className='text-white text-2xl' />
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <div>
//             <li><BiDotsHorizontalRounded/></li>
//         </div>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" /></a>
//     <h1 className='lg:text-2xl text-[#F1F1F1] font-bold font-bodyFont '>Logoipsum</h1>
//   </div>
//   <div className="navbar-end hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//     <div className='text-white'>
//             <li><BiDotsHorizontalRounded className='text-white'/></li>
//             <li>asdfasdf</li>
//         </div>
//     </ul>
//   </div>
//   <div className="navbar-end">
//   <div className="avatar">
//   <div className="avatar">
//   <div className="w-12 rounded-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//   </div>
// </div>
// </div>
//   </div>
// </div>
//         </div>

<nav className="bg-primaryColor p-4">
<div className="container mx-auto flex justify-between items-center">
  <div className="text-white text-xl font-bold flex">
    <img src={logo} alt="" />
  <h1 className='lg:text-2xl text-[#F1F1F1] font-bold font-bodyFont '>Logoipsum</h1>
  </div>
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-white focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
        />
      </svg>
    </button>
  </div>
  <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
    <a href="/" className="block md:inline-block text-white px-4 py-2 hover:bg-blue-700">Home</a>
    <a href="/about" className="block md:inline-block text-white px-4 py-2 hover:bg-blue-700">About</a>
    <a href="/services" className="block md:inline-block text-white px-4 py-2 hover:bg-blue-700">Services</a>
    <a href="/contact" className="block md:inline-block text-white px-4 py-2 hover:bg-blue-700">Contact</a>
    <div className="avatar">
   <div className="w-12 rounded-full">
   <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
   </div>
   </div>
  </div>

</div>

</nav>
    );
};

export default Header;