import "./collections.css";
import Slider from "../../components/Collections/Slider/Slider.jsx";
import Categories from "../../components/Collections/Categories/Categories.jsx";
import Products from "../../components/Collections/Products/Products.jsx";
import { Outlet, useParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";
import Loader from "../../components/Loader/Loader.jsx";

const Collections = () => {
  const { category } = useParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [minMax, setMinMax] = useState({
    min: 0,
    max: 999999,
  });
  const limitPerPage = 12;
  const words = category?.split("-");

  const finalCategory = words
    ?.map((word, i) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  const {
    data: { data: { result, count } = {} } = {},
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categorizedProducts", finalCategory, sort, minMax, currentPage],
    queryFn: () => {
      return makeRequest.get(
        `/products/productsByCategory?category=${finalCategory || ""}&sort=${
          sort || ""
        }&min=${minMax.min}&max=${
          minMax.max
        }&currentPage=${currentPage}&limitPerPage=${limitPerPage}`
      );
    },
    placeholderData: keepPreviousData,
  });

  const totalpage = Array.from(
    { length: Math.ceil(count / 12) },
    (_, i) => i + 1
  );

  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [filterOpen]);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="collections">
          <div
            className={`collections-categories ${
              filterOpen ? "filter-open" : "filter-close"
            }`}
          >
            <Categories
              setFilterOpen={setFilterOpen}
              setMinMax={setMinMax}
              refetch={refetch}
              setCurrentPage={setCurrentPage}
              products={result}
              loading={isLoading}
            />
          </div>
          <div>
            <div className="collectionsSlider">
              <Slider />
            </div>
            <div className="collectionsContent" id="collectionsContent">
              <Outlet
                context={{
                  data: result,
                  sort,
                  setSort,
                  totalpage,
                  currentPage,
                  setCurrentPage,
                  count,
                  limitPerPage,
                  isFetching,
                }}
              />
            </div>
          </div>
          <button
            className="filter-btn"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <CiFilter /> Filter
          </button>
        </div>
      )}
    </>
  );
};

export default Collections;
