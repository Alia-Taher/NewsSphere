import Navbar from "../components/Navbar";
import NewsByCategory from "../components/NewsByCategory";
import Footer from "../components/Footer";

const ByCategory = () => {
  return (
    <>
      <Navbar path="/" />
      <NewsByCategory />
      <Footer />
    </>
  );
};

export default ByCategory;
