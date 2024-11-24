import "./products.css";
import Product from "../../../components/Product/Product.jsx";
import { useOutletContext, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Products = () => {
  const { category } = useParams();
  const {
    data,
    isFetching,
    sort,
    setSort,
    totalpage,
    currentPage,
    setCurrentPage,
    count,
    limitPerPage,
  } = useOutletContext();

  useEffect(() => {
    setSort("");
  }, [category]);

  return (
    <div className="products">
      <div className="productsHeader">
        <h3>Collections</h3>
        <select
          name=""
          id=""
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="latest">Sort by latest</option>
          <option value="priceLowToHigh">Sort by Price: Low to High</option>
          <option value="priceHighToLow">Sort by Price: High to Low</option>
        </select>
      </div>

      <div className="products-main-container">
        <div className="products-card-container">
          {data?.map((product) => (
            <Product product={product} />
          ))}
        </div>
        {isFetching && (
          <div className="products-loader">
            <TailSpin
              visible={isFetching}
              height="60"
              width="60"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {count > limitPerPage && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {"<"}
            </button>
            {totalpage.map((page) => (
              <button
                className={page == currentPage && "currentPage"}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ left: 0, top: 0, behavior: "instant" });
                }}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === totalpage.length}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
