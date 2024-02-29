/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div
      className="flex justify-center my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg  text-gray-400 mt-2">
              Let's Connect On LinkedIn <br /> Or Send Me Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                <p>Sayed Sifat</p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/Pdy096bQ"
            className="p-6 flex flex-col justify-center max-w-[700px]"
            method="post"
          >
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-100 mt-2 py-3 px-3 bg-gray-800 border border-gray-700 text-white rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-100 mt-2 py-3 px-3 bg-gray-800 border border-gray-700 text-white rounded-lg"
              />
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Enter Your Description"
                className="w-100 mt-2 py-3 px-3 bg-gray-800 border border-gray-700 text-white rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
