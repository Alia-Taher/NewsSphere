import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import NewsDisplay from "../components/NewsDisplay";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Categories />
      <NewsDisplay />
      <Footer />
    </>
  );
};

export default Home;
