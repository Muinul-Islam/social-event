import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
