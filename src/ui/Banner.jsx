import { GoDotFill } from 'react-icons/go';
import banner from '../assets/images/Profile Background.png'
import profile from '../assets/images/Profile.png'
const Banner = () => {
    return (
        <div className=''>
           <div className=' relative' >
           <img src={banner} alt="banner" className='' />
           </div>
           <div className='max-w-screen-xl mx-auto p-4'>
            {/* text content  */}
          <div className=' w-1/2 flex items-center justify-between'>
          <div className='  flex items-center gap-4'>
           <img src={profile} alt="profile" className='w-16 lg:w-24 text-center top-40 lg:top-80   ' />
         <h1 className='lg:text-2xl font-bodyFont font-bold'>John Deo</h1>
         <GoDotFill/>
         <p className='btn-link'>@johndoe</p>
           </div>
           <button className='px-4 py-1 text-2xl text-white font-semibold font-bodyFont bg-[#196AA0] rounded-full'>Follow</button>
          </div>
          {/* <h1>Astrophotographer 🌌
          Gamer 👾</h1> */}
          {/* video content  */}
          <div>

          </div>
          
          </div>
           
          
        </div>
    );
};

export default Banner;