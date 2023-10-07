import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-semibold">
        OUR SERVICE DETAILS
      </h1>
      <div className="my-8 grid grid-cols-1 w-3/4 mx-auto gap-8">
        {data?.map((service) => (
          <div key={service.id}>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-96" src={service.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.event_name}</h2>
                <p>{service.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-red-600 text-xl p-2 font-bold">
                    {service.price}
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/service/${service.id}`}
                      className="btn bg-red-500 text-white"
                    >
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
