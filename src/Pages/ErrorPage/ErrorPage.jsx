import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ErrorPage = () => {
  return (
    <div>
      <div className="grid h-[90vh] px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-bold text-gray-500 text-7xl">404</h1>
          <p className="mt-4 mb-8 text-gray-500 ">Can't Find The Page.</p>
          <Link
            to="/"
            className="px-5 py-3 mt-12 text-xl font-semibold text-white  bg-red-500 rounded-lg hover:bg-red-400 "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
