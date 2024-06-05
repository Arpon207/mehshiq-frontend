import { NavLink } from "react-router-dom";
import "./categories.css";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { products } from "../../../constants/products";
import { FaArrowCircleRight } from "react-icons/fa";

const Categories = () => {
  const Min = Math.min(...products.map((product) => product.price));
  const Max = Math.max(...products.map((product) => product.price));
  const [minValue, set_minValue] = useState(Min);
  const [maxValue, set_maxValue] = useState(Max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <>
      <div className="mainCategories">
        <h3>All Categories</h3>
        <hr />
        <div>
          <NavLink>Shoulder Bags</NavLink>
          <NavLink>Tote Bags</NavLink>
          <NavLink>Hand Bags</NavLink>
          <NavLink>Backpacks</NavLink>
          <NavLink>School Bags</NavLink>
          <NavLink>Crossbody Bags</NavLink>
          <NavLink>Bucket Bags</NavLink>
          <NavLink>Mini Bags</NavLink>
          <NavLink>Sync Set</NavLink>
        </div>
      </div>
      <div className="filterByPrice">
        <h3>Filter by price</h3>
        <MultiRangeSlider
          min={Min}
          max={Max}
          step={5}
          minValue={Min}
          maxValue={Max}
          ruler={false}
          barInnerColor="black"
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <div className="bottom">
          <p>
            Price: BDT {minValue} from BDT {maxValue}
          </p>
          <button>
            Filter <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
