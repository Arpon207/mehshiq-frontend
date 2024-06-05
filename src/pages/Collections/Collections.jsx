import "./collections.css";
import Slider from "../../components/Collections/Slider/Slider.jsx";
import Categories from "../../components/Collections/Categories/Categories.jsx";
import Products from "../../components/Collections/Products/Products.jsx";

const Collections = () => {
  return (
    <div className="collections">
      <div>
        <Categories />
      </div>
      <div>
        <div className="collectionsSlider">
          <Slider />
        </div>
        <div className="collectionsContent">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Collections;
