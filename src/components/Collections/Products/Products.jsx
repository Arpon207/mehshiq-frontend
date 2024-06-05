import "./products.css";
import Product from "../../../components/Product/Product.jsx";
import useFetch from "../../../hooks/useFetch.js";

const Products = () => {
  const { data: products } = useFetch("products", "/products/all");
  return (
    <div className="products">
      <div className="productsHeader">
        <h3>Collections</h3>
        <select name="" id="">
          <option value="">Default sorting</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by latest</option>
          <option value="">Sort by Price: Low to High</option>
          <option value="">Sort by Price: High to Low</option>
        </select>
      </div>

      <div className="products-card-container">
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
