import ReactPlayer from "react-player";
import "./productDesc.css";

const ProductDesc = ({ desc, video }) => {
  return (
    <div className="productDesc">
      {video && (
        <div className="productVideo">
          <ReactPlayer
            url={video}
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export default ProductDesc;
