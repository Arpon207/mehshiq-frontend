import { Link, useNavigate } from "react-router-dom";
import authBanner from "../../assets/authBanner2.jpg";
import { useForm } from "react-hook-form";
import "./auth.css";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Lib/firebase.config";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password).then((res) => {
      if (res.user) {
        navigate("/");
      }
    });
  };

  return (
    <div className="auth">
      <div className="auth-banner">
        <img src={authBanner} alt="" />
        <h3>MehshiQ</h3>
        <h2>
          Welcome, We are glad to <br /> see you again!
        </h2>
      </div>
      <div className="authentication">
        <div className="auth-container">
          <h3>Log In to Your Account</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputWrapper">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w.+\-]+@gmail\.com$/,
                    message: "Please provide valid gmail",
                  },
                })}
              />
              {errors.email && (
                <p className="auth-error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value: /.{8,}/,
                    message: "Password should contain 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="auth-error-message">{errors.password.message}</p>
              )}
            </div>
            <div className="auth-form-action-btns">
              <button type="submit">Login</button>
              <Link> Forget Password?</Link>
            </div>
          </form>
          <div className="or">
            <div></div>
            <p>Or Login With</p>
            <div></div>
          </div>
          <SocialLogin />
          <Link to={"/register"} className="account-create-link">
            Create New Account ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
