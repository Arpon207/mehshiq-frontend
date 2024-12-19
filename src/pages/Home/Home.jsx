import BestSellers from "../../components/Home/BestSellers/BestSellers";
import Categories from "../../components/Home/Categories/Categories";
import NewArrivals from "../../components/Home/NewArrivals/NewArrivals";
import "./home.css";
import HomeMensCollection from "../../components/Home/HomeMensCollection/HomeMensCollection";
import HomeWomensCollection from "../../components/Home/HomeWomensCollection/HomeWomensCollection";
import WhatWeOffer from "../../components/Home/WhatWeOffer/WhatWeOffer";
import Banner from "../../components/Home/Banner/Banner";
import upArrow from "../../assets/icons/up-arrow (1).png";
import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../redux/postAPI";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { data: posts } = useGetPostsQuery({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="home">
        <Banner />
        <NewArrivals />
        <Categories />
        <BestSellers />
        <HomeWomensCollection />
        <HomeMensCollection />
        <WhatWeOffer />
        <button
          className={`scrollToTop ${
            scrollY > 500 ? "scrollToTop-btn-show" : "scrollToTop-btn-hide"
          }`}
          onClick={() => scrolltoTop()}
        >
          <img src={upArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default Home;
