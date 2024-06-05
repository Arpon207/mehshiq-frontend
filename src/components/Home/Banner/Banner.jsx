import "./banner.css";
import bag1 from "../../../assets/bags/bag1.jpg";
import bag2 from "../../../assets/bags/bag2.jpg";
import bag3 from "../../../assets/bags/bag3.jpg";
import bag4 from "../../../assets/bags/bag4.jpg";
import female from "../../../assets/model-female.png";
import male from "../../../assets/model-male.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="bannerCard1">
        <div className="bannerDesc container">
          <h1>AN.GELIC</h1>
          <h3>Elevate Your Style with Exquisite Bags</h3>
          <p>
            Welcome to An.gelic, where sophistication meets functionality in
            every stitch. Explore our curated collection of luxurious bags
            crafted to complement your unique style and elevate your everyday
            experiences. From sleek leather briefcases exuding professionalism
            to chic backpacks blending fashion with practicality, each piece is
            meticulously designed to seamlessly integrate into your lifestyle.
            Indulge in the epitome of elegance and functionality with LuxeCarry,
            where your journey begins with the perfect bag.
          </p>
        </div>
      </div>
      <div className="bannerCard2 model">
        <h3>Women Bag</h3>
        <img src={female} alt="" />
      </div>
      <div className="bannerCard3 model">
        <h3>Men Bag</h3>
        <img src={male} alt="" />
      </div>
      <div className="bannerCard4">
        <div>
          <h3>BIG SALE </h3>
          <p>ON WOMEN SUMMER COLLECTION</p>
          <h3>20% OFF</h3>
        </div>
      </div>
      <div className="bannerCard5">
        <img src={bag1} alt="" />
        <img src={bag2} alt="" />
        <img src={bag3} alt="" />
        <img src={bag4} alt="" />
        <div>
          <button>Explore Our Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
