import Featured from "../../components/featured/featured";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navBar/navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
