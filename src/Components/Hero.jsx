import profilePic from "../assets/images/profilepic5.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className=" my-7 sm:my-0 max-w-[1200px] h-[80vh]   mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi I Am Sifat
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Web Designer", //  Continuing previous Text
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              With 1+ Year Experience
            </p>
          </div>
          <div className="md:text-4xl flex justify-start gap-16 my-7 text-purple-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          </div>
          <a
            href="/"
            title="Download Resume"
            role="button"
            className="w-[190px] h-[60px] relative inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-offset-2 focus:ring-gray-900"
          >
            Download Resume
          </a>
        </div>
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilePic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
