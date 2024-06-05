import { useState } from "react";
import "./productPageTabs.css";

const ProductPageTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="productPageTabs">
      <button
        className={`tab ${selectedTab === 1 && "tab-active"}`}
        onClick={() => setSelectedTab(1)}
      >
        Description
      </button>
      <button
        className={`tab ${selectedTab === 2 && "tab-active"}`}
        onClick={() => setSelectedTab(2)}
      >
        Reviews
      </button>
    </div>
  );
};

export default ProductPageTabs;
