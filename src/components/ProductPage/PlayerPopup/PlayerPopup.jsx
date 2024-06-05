import { RxCross1 } from "react-icons/rx";
import "./playerPopup.css";

const PlayerPopup = ({ setShowPopup }) => {
  return (
    <div className="playerPopup" onClick={() => setShowPopup(false)}>
      <button>
        <RxCross1 />
      </button>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <video
          src="https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4"
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

export default PlayerPopup;
