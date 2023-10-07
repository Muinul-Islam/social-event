/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div
        className=" hero h-[90vh]"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp2349395.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl text-red-600 font-bold">
              Welcome To Our Social Event Management
            </h1>
            <p className="mb-5">
              we're committed to providing you with the best experience
              possible. Whether you're looking for inspiration, information, or
              products and services, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
