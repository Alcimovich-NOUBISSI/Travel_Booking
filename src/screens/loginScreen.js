import "./login.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton  } from "react-social-login-buttons";

const LoginScreen = () => {
  return (
    <div>
      <Header />
      <form className="login_form">
        <h3>Login</h3>
        <div className="socials">
        <FacebookLoginButton onClick={() => alert("Hello")}>
          <span>Sign up with Facebook </span>
        </FacebookLoginButton>
          <GoogleLoginButton  onClick={() => alert("Hello")}>
            <span>Sign up with Google </span>
          </GoogleLoginButton >
        </div>
        <div className="or">
          <span>OR</span>
        </div>
        <input type="email" placeholder="enter your email" />
        <input type="password" placeholder="enter your password" />
        <div className="remember">
          <div>
            <input type="checkbox" id="remember" />
            <label for="remember"> Remember me</label>
          </div>
          <span>Forgot your password?</span>
        </div>
        <input type="button" value="Login" />
        <p>
          Don't have an account? <a href="/">Register Now</a>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default LoginScreen;
