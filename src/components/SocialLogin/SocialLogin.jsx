import { FaGoogle } from "react-icons/fa6";
import { auth } from "../../Lib/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <button className="social-login-btn" onClick={() => signInWithGoogle()}>
      <FaGoogle />
      Google
    </button>
  );
};

export default SocialLogin;
