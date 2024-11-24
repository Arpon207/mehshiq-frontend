import { useEffect, useState } from "react";
import "./search.css";
import search_icon from "../../assets/icons/search.png";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchShow, setSearchShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const enabled = searchText.length > 2;

  const { data: { data: { result } = {} } = {}, isLoading } = useQuery({
    queryKey: ["searchedProducts", searchText],
    queryFn: () => {
      return makeRequest(`/products/searchByQuery?search=${searchText}`);
    },
    enabled: enabled,
  });

  useEffect(() => {
    if (searchShow) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [searchShow]);

  return (
    <div className="search-container">
      <button className="search-btn" onClick={() => setSearchShow(true)}>
        <img src={search_icon} alt="" />
      </button>
      <div
        className={`searchPopup ${
          searchShow ? "searchPopup-show" : "searchPopup-hide"
        }`}
      >
        <button
          className="searchPopup-close-btn"
          onClick={() => {
            setSearchText("");
            setSearchShow(false);
          }}
        >
          <RxCross2 />
        </button>
        <div className="searchPopup-content">
          <h3>WHAT ARE YOU LOOKING FOR?</h3>
          <div className="searchPopup-content-input">
            <div className="searching-loader">
              <TailSpin
                visible={isLoading}
                height="30"
                width="30"
                color="#000000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
            <input
              type="text"
              name="searchText"
              id="searchText"
              placeholder="Start typing . . ."
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />

            {searchText.length > 0 && (
              <button onClick={() => setSearchText("")}>
                <RxCross2 /> Clear
              </button>
            )}
          </div>
          {searchText?.length > 2 && result?.length < 1 && (
            <div className="searchPopup-noResult">
              <p>No result found</p>
            </div>
          )}
          {result?.length > 0 && (
            <>
              <div className="searchedProducts">
                {(result?.length > 8 ? result.slice(0, 8) : result)?.map(
                  ({ images, title, price, category, _id }, i) => (
                    <div
                      key={i}
                      className="searchedProduct"
                      onClick={() => {
                        setSearchShow(false);
                        setSearchText("");
                        navigate(`/collections/${category}/${_id}`);
                      }}
                    >
                      <img src={images[0]?.img} alt="" />
                      <div>
                        <strong>{title}</strong>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Officiis...
                        </p>
                        <p>BDT {price}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <button>See all result</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
