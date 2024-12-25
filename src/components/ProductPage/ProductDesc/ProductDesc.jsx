import "./productDesc.css";

const ProductDesc = ({ desc }) => {
  return (
    <div className="productDesc">
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export default ProductDesc;
