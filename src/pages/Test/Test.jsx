import ReactPlayer from "react-player";
import "./test.css";

const Test = () => {
  return (
    <div className="test">
      {/* <ReactPlayer
        url={
          "https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4"
        }
        controls={true}
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      /> */}
      <video
        src="https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4"
        controls
      />
    </div>
  );
};

export default Test;
