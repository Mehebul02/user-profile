import { GoDotFill } from "react-icons/go";
import banner from "../assets/images/Profile Background.png";
import profile from "../assets/images/Profile.png";
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
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="w-1/2 my-16 border p-4 rounded-lg">
            <h1 className="text-[26px] font-bodyFont font-bold">
              How Astrophotography changed my life
            </h1>
            <p className="my-6 font-bodyFont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros
              tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
              vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse{" "}
            </p>
            {/* link  */}
            <div className="flex flex-row justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <button className="text-blue-600 bg-white px-3 py-2 rounded-full">#photography</button>
              <button className="text-blue-600 bg-white px-3 py-2 rounded-full">#astronomy</button>
              <button className="text-blue-600 bg-white px-3 py-2 rounded-full">#astrophotography</button>
              <button className="text-blue-600 bg-white px-3 py-2 rounded-full font-bold">+</button>
            </div>
   <button className="text-xl text-blue-600 font-bodyFont font-bold">Read More</button>
            </div>
          </div>
                   {/* video content  */}
<div>
asdfsdfd
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
