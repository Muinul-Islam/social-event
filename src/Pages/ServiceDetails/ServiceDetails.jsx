import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [ServiceDetail, setServiceDetail] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const serviceCard = data?.find((Card) => Card.id === parseInt(id));

    setServiceDetail(serviceCard);
  }, [data, id]);

  const { image, description, event_name, price } = ServiceDetail;

  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-semibold">
        OUR SERVICE DETAILS
      </h1>

      <div className="w-3/4 mx-auto my-10">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-96" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event_name}</h2>
            <p>{description}</p>
            <div className="flex justify-between items-center">
              <p className="text-red-600 text-xl p-2 font-bold">{price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
