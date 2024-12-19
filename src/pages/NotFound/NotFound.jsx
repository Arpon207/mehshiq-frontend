import "./notFound.css";
import notFoundIcon from "../../assets/icons/error-404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <img src={notFoundIcon} alt="" />
      <h2>Oops!</h2>
      <p>We're sorry,</p>
      <p>The page you were looking for doesn't Exist anymore.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default NotFound;
