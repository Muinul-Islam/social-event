/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div
        className=" hero h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp2349395.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="mb-5 text-4xl sm:text-5xl text-red-600 font-bold">
              Welcome To Our Social Event Management
            </h1>
            <p className="mb-5 text-base sm:text-lg">
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
