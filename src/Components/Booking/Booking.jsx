/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <div className="hero max-h-fit bg-red-500 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" md: text-center lg:text-left">
            <h1 className="text-5xl font-bold">Apply For Booking</h1>
            <p className="py-6">
              If you have any questions or need to make any changes to your
              booking, please contact support team at Customer Support center .
              We are here to assist you every step of the way.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-400">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Event Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Event Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Didn't Login Yet?{" "}
                    <Link className="text-blue-600" to="/login">
                      Login
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
