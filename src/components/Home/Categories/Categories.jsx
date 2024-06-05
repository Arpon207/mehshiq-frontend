import "./categories.css";
import shoulderBag from "../../../assets/categories/shoulder-bag.jpg";
import backpackBag from "../../../assets/categories/backpack-bag.jpg";
import saddleBag from "../../../assets/categories/saddle-bag.jpg";
import toteBag from "../../../assets/categories/tote-bag.jpg";
import handBag from "../../../assets/categories/shoulder-bag.jpg";

const categories = [
  {
    name: "Shoulder Bag",
    image: shoulderBag,
  },
  {
    name: "Tote bag",
    image: toteBag,
  },
  {
    name: "Hand Bag",
    image: handBag,
  },
  {
    name: "Backpack",
    image: backpackBag,
  },
  {
    name: "Saddle Bag",
    image: saddleBag,
  },
];

const Categories = () => {
  return (
    <div className="categories container">
      <h3>
        An.gelics Categories <br /> You Would Love.
      </h3>
      <div className="categories-card-container ">
        {categories.map(({ name, image }, i) => (
          <div className={`categories-card ${"card" + i}`}>
            <img src={image} alt="" />
            <div className="categories-card-content">
              <h3>{name}</h3>
              <button>See Products</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
