import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
