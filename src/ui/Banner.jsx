import { GoDotFill } from "react-icons/go";
import banner from "../assets/images/Profile Background.png";
import profile from "../assets/images/Profile.png";
import CustomComponent from "./CustomComponent";
import img1 from '../assets/images/Rectangle1.png'
import img2 from '../assets/images/Rectangle 2.png'
import img3 from '../assets/images/Rectangle 3.png'
import img4 from '../assets/images/Rectangle 4.png'
import video1 from '../assets/images/video/video.png'
import btn from '../assets/images/video/Btn Player.png'
import video2 from '../assets/images/video/video2.png'
import video4 from '../assets/images/video/video4.png'
import video5 from '../assets/images/video/video5.png'

const Banner = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <div className=" relative">
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <div className="max-w-screen-xl mx-auto  p-4">
        {/* profile  */}
        <div className=" w-1/2  flex flex-col lg:flex-row items-center justify-between">
          <div className="  flex items-center gap-4">
            <img
              src={profile}
              alt="profile"
              className="w-16 lg:w-24 text-center top-40 lg:top-80   "
            />
            <div className="mt-12">
              <h1 className="text-balance lg:text-2xl font-bodyFont font-bold">
                John Deo
              </h1>
              <h1 className="w-40 font-bodyFont">
                Astrophotographer 🌌 Gamer 👾
              </h1>
            </div>

            <GoDotFill />
            <p className="btn-link">@johndoe</p>
          </div>
          <button className="px-4 py-1 text-2xl text-white font-semibold font-bodyFont bg-[#196AA0] rounded-full">
            Follow
          </button>
        </div>

        {/*   */}
        <div className="flex flex-col lg:flex-row  justify-between">
          <div>
            <CustomComponent title="How Astrophotography changed my life" />
            <CustomComponent title="Which Telescope and DSLR I use" />
          </div>
          {/* image and video  */}
          <div className="">
            <h1 className="text-2xl text-[#2B2B2B] font-bodyFont font-bold ">Photos</h1>
            <div className="lg:w-80 grid grid-cols-2 ">
              <img src={img1} alt="" className="rounded-tl-xl"/>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <h1 className="text-2xl text-end font-bodyFont font-semibold text-blue-700">More +</h1>
         {/* video  */}
         <div>
          <h1 className="text-2xl text-[#2B2B2B] font-bodyFont font-bold ">Videos</h1>
          {/* video 1  */}
          <div className="relative">
            <img src={video1} alt="" className="lg:w-full" />
            <img src={btn} alt="" className="lg:w-20 absolute bottom-0 left-32 top-16" />
          </div>
          {/* video 2  */}
         <div className="flex gap-3">
         <div className="relative mt-6">
            <img src={video2} alt="" className="w-24" />
            <img src={btn} alt="" className=" absolute bottom-0 left-10 top-10" />
          </div>
          <div className="relative mt-6">
            <img src={video5} alt="" className="w-24" />
            <img src={btn} alt="" className=" absolute bottom-0 left-10 top-10" />
          </div>
          <div className="relative mt-6">
            <img src={video4} alt="" className="w-24" />
            <img src={btn} alt="" className=" absolute bottom-0 left-10 top-10" />
          </div>
         </div>
         <h1 className="text-2xl text-end font-bodyFont font-semibold text-blue-700">More +</h1>

         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
