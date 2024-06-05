import BestSellers from "../../components/Home/BestSellers/BestSellers";
import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Home/Categories/Categories";
import NewArrivals from "../../components/Home/NewArrivals/NewArrivals";
import "./home.css";
import HomeMensCollection from "../../components/Home/HomeMensCollection/HomeMensCollection";
import HomeWomensCollection from "../../components/Home/HomeWomensCollection/HomeWomensCollection";
import WhatWeOffer from "../../components/Home/WhatWeOffer/WhatWeOffer";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, isLoading } = useFetch("products", "/products/all");
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="home">
          <Banner />
          <NewArrivals products={data} />
          <Categories />
          <BestSellers products={data} />
          <HomeWomensCollection products={data} />
          <HomeMensCollection products={data} />
          <WhatWeOffer />
        </div>
      )}
    </>
  );
};

export default Home;
