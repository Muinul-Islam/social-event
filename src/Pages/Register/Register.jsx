/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handlePassword = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;

    if (!password.match(passwordRegex)) {
      swal(
        "ERROR!",
        "Password must have at least one lowercase letter, one uppercase letter, one special character, and be at least 6 characters long.",
        "error"
      );
    }

    createUser(email, password)
      .then((result) => {
        swal("Good job!", "You Registered Successfully", "success");
      })
      .catch((error) => {
        swal("ERROR!", error.message, "error");
      });
  };
  return (
    <div>
      <div className="hero min-h-[80vh] ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <form onSubmit={handlePassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
            </div>
            <p>
              Already Have An Account?{" "}
              <Link to="/login" className="text-red-600">
                LOGIN
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
