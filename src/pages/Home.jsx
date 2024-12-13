import { Header } from "../components/Header.jsx";
import Slide from "../components/Slide.jsx";
import FlavorCollection from "../components/FlavorCollection.jsx";
import FlavorInfo from "../components/FlavorInfo.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import Products from "../components/Products.jsx";
import Footer from "../components/Footer.jsx";
const NotFound = () => {
  return (
    <>
      <Header></Header>
      <Slide></Slide>
      <Products />
      <FlavorCollection />
      <FlavorInfo />
      <ImageCarousel />
      {/* <Footer /> */}
    </>
  );
};

export default NotFound;
