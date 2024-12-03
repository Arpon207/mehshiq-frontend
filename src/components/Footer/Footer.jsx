import { customerCare, moreInfo } from "../../constants/footer";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall, IoTime } from "react-icons/io5";
import { products } from "../../constants/products";
import faceBookIcon from "../../assets/icons/facebook (3).png";
import tiktokIcon from "../../assets/icons/video.png";
import instagramIcon from "../../assets/icons/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>About Mehshiq</h3>
          <p>
            Welcome to Mehshiq, where sophistication meets functionality in
            every stitch. Explore our curated collection of luxurious bags
            crafted to complement your unique style and elevate your everyday
            experiences.
          </p>
          <div className="social-links">
            <img src={faceBookIcon} alt={faceBookIcon} />
            <img src={instagramIcon} alt="" />
            <img src={tiktokIcon} alt="" />
          </div>
        </div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            {customerCare.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>More Info</h3>
          <ul>
            {moreInfo.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li className="location">
              <FaLocationDot className="icon" /> Shamsul Haque Tower, Chawk
              Bazar Shahi Mosque, 88-89, Mughaltuli, Dhaka, Bangladesh
            </li>
            <li>
              <IoIosMail /> info.angelic08@gmail.com
            </li>
            <li>
              <IoCall /> +8801978-036370
            </li>
            <li>
              <IoTime /> Saturday to Thursday, 09:00 - 22:00
            </li>
          </ul>
        </div>
        <div>
          <h3>May you like</h3>
          <div className="footer-products">
            {products.slice(0, 8).map((item, i) => (
              <div key={i}>
                <img src={item?.images[0].img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>Copyright © 2023 Mehshiq. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
