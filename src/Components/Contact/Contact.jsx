import { ImLocation2 } from "react-icons/im";
import { GiRotaryPhone } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { RxEyeOpen } from "react-icons/rx";

const Contact = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold text-center">Contact Info</h1>
      <div data-aos="flip-up">
        <div className="px-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="card card-compact bg-base-100 shadow-xl my-8">
            <div className="text-5xl pt-3 text-red-500">
              <ImLocation2 className="w-full mx-auto"></ImLocation2>
            </div>
            <div className="card-body text-center">
              <h2 className="text-2xl">Postal Address</h2>
              <p className="text-xl">Social Events</p>
              <p className="text-lg"> 601 Main St Ne</p>
              <p className="text-lg"> United States</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl my-8">
            <div className="text-5xl pt-3 text-red-500">
              <GiRotaryPhone className="w-full mx-auto"></GiRotaryPhone>
            </div>
            <div className="card-body text-center">
              <h2 className="text-2xl">Phone & E-mail</h2>
              <p className="text-xl">Phone: 1824511</p>
              <p className="text-lg">Fax: 2157784</p>
              <p className="text-lg">Email: Online@booking.com</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl my-8">
            <div className="text-5xl pt-3 text-red-500">
              <BsClock className="w-full mx-auto"></BsClock>
            </div>
            <div className="card-body text-center">
              <h2 className="text-2xl">Open Hours</h2>
              <p className="text-xl">Sunday - Thursday</p>
              <p className="text-lg">9.00am - 5.00pm</p>
              <p className="text-lg">Weekend From 3.00pm - 9.00pm</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl my-8">
            <div className="text-5xl pt-3 text-red-500">
              <RxEyeOpen className="w-full mx-auto"></RxEyeOpen>
            </div>
            <div className="card-body text-center">
              <h2 className="text-2xl">Sessions</h2>
              <p className="text-xl">Mornings,9 am - 12 pm</p>
              <p className="text-lg">Afternoons,1:30pm - 5.00pm</p>
              <p className="text-lg">Full Day,8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
