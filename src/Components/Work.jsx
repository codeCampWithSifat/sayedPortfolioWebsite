import project1 from "../assets/images/proj1.png";
import project2 from "../assets/images/proj2.png";
import project3 from "../assets/images/proj3.png";
import project4 from "../assets/images/proj4.png";
import project5 from "../assets/images/proj5.png";
import project6 from "../assets/images/proj6.png";

const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between ">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">My Projects</h2>
            <p className="text-gray-500">
              These Are My latest Projects Fro Different Clients
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg  md:h-80"
          >
            <img
              src={project1}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={project2}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg md:col-span-2  md:h-80"
          >
            <img
              src={project3}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg  md:h-80"
          >
            <img
              src={project4}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg  md:h-80"
          >
            <img
              src={project5}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
          <a
            href="/"
            className="group  h-48  overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={project6}
              className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
