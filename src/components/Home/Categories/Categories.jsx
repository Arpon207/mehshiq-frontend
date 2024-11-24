import "./categories.css";
import shoulderBag from "../../../assets/categories/shoulder-bag.jpg";
import backpackBag from "../../../assets/categories/backpack-bag.jpg";
import saddleBag from "../../../assets/categories/saddle-bag.jpg";
import toteBag from "../../../assets/categories/tote-bag.jpg";
import handBag from "../../../assets/categories/shoulder-bag.jpg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Shoulder Bag",
    image: shoulderBag,
    path: "/collections/shoulder-bags",
  },
  {
    name: "Tote bag",
    image: toteBag,
    path: "/collections/tote-bags",
  },
  {
    name: "Hand Bag",
    image: handBag,
    path: "/collections/hand-bags",
  },
  {
    name: "Backpack",
    image: backpackBag,
    path: "/collections/backpacks",
  },
  {
    name: "Saddle Bag",
    image: saddleBag,
    path: "/collections/saddle-bags",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categories container">
      <h3>
        Mehshiq's Categories <br /> You Would Love.
      </h3>
      <div className="categories-card-container ">
        {categories.map(({ name, image, path }, i) => (
          <div className={`categories-card ${"card" + i}`}>
            <img src={image} alt="" />
            <div className="categories-card-content">
              <h3>{name}</h3>
              <button onClick={() => navigate(path)}>See Products</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
