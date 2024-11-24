import { TailSpin } from "react-loader-spinner";
import "./loader.css";

const Loader = ({ isLoading }) => {
  return (
    <div className="loader">
      <TailSpin
        visible={isLoading}
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
