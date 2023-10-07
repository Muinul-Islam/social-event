import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

import Contact from "../../Components/Contact/Contact";
import Booking from "../../Components/Booking/Booking";
import Accordian from "../../Components/Accordian/Accordian";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Booking></Booking>
      <Accordian></Accordian>
      <Contact></Contact>
    </div>
  );
};

export default Home;
