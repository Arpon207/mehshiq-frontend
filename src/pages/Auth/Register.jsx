import { Link, useNavigate } from "react-router-dom";
import authBanner from "../../assets/authBanner2.jpg";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { auth } from "../../Lib/firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="auth">
      <div className="auth-banner">
        <img src={authBanner} alt="" />
        <h3 onClick={() => navigate("/")}>MehshiQ</h3>
        <h2>
          Welcome, Looks like <br /> you're new here!
        </h2>
      </div>
      <div className="authentication">
        <div className="auth-container">
          <h3>Create New Account</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputWrapper">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="auth-error-message">{errors.name.message}</p>
              )}
            </div>
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
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="or">
            <div></div>
            <p>Or Register With</p>
            <div></div>
          </div>
          <SocialLogin />
          <Link to={"/login"} className="account-create-link">
            Already Have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
