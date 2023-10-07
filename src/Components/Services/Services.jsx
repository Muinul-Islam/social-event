/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Services = ({ services }) => {
  const data = services;

  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold text-center">Our Service's</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-3/4 mx-auto mt-8">
        {data.map((service) => (
          <div key={service.id}>
            <div className="card bg-base-100 shadow-xl" data-aos="flip-right">
              <figure>
                <img className="h-80 w-full" src={service.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.event_name}</h2>
                <p>{service.description.slice(0, 70)}.....</p>
                <div className="card-actions justify-end">
                  <p className="font-bold text-red-600">{service.price}</p>
                  <Link
                    to={`/service/${service.id}`}
                    className="py-1 px-2 rounded-md bg-red-500 text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
