import { NavLink, useLocation } from "react-router-dom";
import "./categories.css";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { FaArrowCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useGetPostsQuery } from "../../../redux/postAPI";

const Categories = ({
  setFilterOpen,
  setMinMax,
  refetch,
  setCurrentPage,
  products,
}) => {
  const { data: categories } = useGetPostsQuery();

  const Min = Math.min(...products.map((product) => product.price));
  const Max = Math.max(...products.map((product) => product.price));
  const [minValue, set_minValue] = useState(Min);
  const [maxValue, set_maxValue] = useState(Max);
  const location = useLocation();

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
          <NavLink
            to={"/collections"}
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
              location.pathname === "/collections" && "category-selected"
            }`}
          >
            All Bags
          </NavLink>
          {categories?.map(({ title }, i) => (
            <NavLink
              to={title.split(" ").join("-").toLocaleLowerCase()}
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
                (location.pathname ===
                  `/collections/${title
                    .split(" ")
                    .join("-")
                    .toLocaleLowerCase()}` ||
                  (location.pathname === "/collections" &&
                    title.split(" ").join("-").toLocaleLowerCase() === "")) &&
                "category-selected"
              }`}
              key={i}
            >
              {title}
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
