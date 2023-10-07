/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        swal("Good job!", "You Logged In Successfully", "success");
      })
      .catch((error) => {
        swal("ERROR!", error.message, "error");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        swal("Good job!", "You Logged In Successfully!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        swal("ERROR!", error.message, "error");
      });
  };

  return (
    <div>
      <div className="hero min-h-[80vh] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New Here?{" "}
                <Link to="/register" className="text-blue-600">
                  REGISTER
                </Link>
              </p>
            </form>
            <div className="w-3/4 mx-auto rounded-lg mb-4 bg-red-500 p-2 text-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-between gap-2 text-white  items-center"
              >
                {" "}
                <AiOutlineGoogle></AiOutlineGoogle> Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
