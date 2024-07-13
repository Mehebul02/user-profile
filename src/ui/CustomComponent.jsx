
const CustomComponent = ({title}) => {
    return (
        <div className="max-w-[700px] my-16 border p-4 rounded-lg">
        <h1 className="text-[26px] font-bodyFont font-bold">
         { title}
        </h1>
        <p className=" my-6 font-bodyFont">
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
    );
};

export default CustomComponent;