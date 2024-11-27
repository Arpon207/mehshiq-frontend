import { NavLink, useLocation } from "react-router-dom";
import "./categories.css";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { products } from "../../../constants/products";
import { FaArrowCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const categories = [
  { name: "All Bags", path: "" },
  { name: "Shoulder Bags", path: "shoulder-bags" },
  { name: "Tote Bags", path: "tote-bags" },
  { name: "Hand Bags", path: "hand-bags" },
  { name: "Backpacks", path: "backpacks" },
  { name: "School Bags", path: "school-bags" },
  { name: "Crossbody Bags", path: "crossbody-bags" },
  { name: "Bucket Bags", path: "bucket-bags" },
  { name: "Mini Bags", path: "mini-bags" },
  { name: "Sync Set", path: "sync-bet" },
];

const Categories = ({ setFilterOpen, setMinMax, refetch, setCurrentPage }) => {
  const Min = Math.min(...products.map((product) => product.price));
  const Max = Math.max(...products.map((product) => product.price));
  const [minValue, set_minValue] = useState(Min);
  const [maxValue, set_maxValue] = useState(Max);
  const location = useLocation();

  console.log(location.pathname.length);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handlePriceRange = () => {
    setMinMax({ min: minValue, max: maxValue });
    setFilterOpen(false);
    refetch();
  };
  return (
    <>
      <div className="mainCategories">
        <h3>
          All Categories{" "}
          <button onClick={() => setFilterOpen(false)}>
            <RxCross2 />
          </button>
        </h3>
        <hr />
        <div>
          {categories.map(({ path, name }, i) => (
            <NavLink
              to={path}
              onClick={() => {
                setCurrentPage(1);
                setFilterOpen(false);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className={`${
                (location.pathname === `/collections/${path}` ||
                  (location.pathname === "/collections" && path === "")) &&
                "category-selected"
              }`}
            >
              {name}
            </NavLink>
          ))}
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
          <button onClick={() => handlePriceRange()}>
            Filter <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
