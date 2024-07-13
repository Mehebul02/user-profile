import logo from '../assets/images/logo.png'
import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegBell } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { FaPencil, FaRegMessage } from 'react-icons/fa6';
import profile from '../assets/images/Profile.png'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

<nav className="bg-primaryColor p-4">
<div className="max-w-screen-xl mx-auto flex justify-between items-center ">
  <div className="text-white text-xl font-bold flex">
    <img src={logo} alt="" />
  <h1 className='lg:text-2xl text-[#F1F1F1] font-bold font-bodyFont '>Logoipsum</h1>
  </div>
 <div className='flex items-center gap-4'>
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
  <div className='flex   items-center gap-10'>
  <div className={`md:flex md:items-center gap-4 ${isOpen ? 'block' : 'hidden'}`}>
    <a href="/" className="block md:inline-block text-white p-2 bg-[#2B2B2B] rounded-full"> <CiSearch/></a>
    <a href="/" className="block md:inline-block text-white p-2 bg-[#2B2B2B] rounded-full"> <FaPencil/></a>
    <a href="/" className="block md:inline-block text-white p-2 bg-[#2B2B2B] rounded-full"> <FaRegMessage/></a>
    <a href="/about" className="block md:inline-block text-white p-2 bg-[#2B2B2B] rounded-full"><FaRegBell/></a>
    <a href="/" className="block md:inline-block text-white p-2 bg-[#2B2B2B] rounded-full"> <HiOutlineDotsHorizontal/></a>
   
    
  </div>
  <div className="avatar">
   <div className="w-12 rounded-full">
   <img src={profile} />
   </div>
   </div>
  </div>
 </div>

</div>

</nav>
    );
};

export default Header;