import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";

function RegisterPage() {
  const [dataUser, setDataUser] = useState({
    username: "",
    gender: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    console.log(dataUser.gender);
    setDataUser({
      ...dataUser,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Register ${dataUser.username}`,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response, "<<<<<<<<<<< DARI SERVER ADD");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.error.message[0],
      });
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-light text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 border border-dark rounded">
                  <div className="mb-md-5 mt-md-4 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      Register
                    </h2>
                    <form onSubmit={submitHandler}>
                      {/* <!-- Email input --> */}
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <div className="form-outline mb-1">
                        <input
                          type="email"
                          id="form2Example1"
                          className="form-control border border-dark rounded"
                          autoComplete="email"
                          name="email"
                          value={dataUser.email}
                          onChange={inputHandler}
                        />
                      </div>

                      {/* <!-- Usernamne input --> */}
                      <label className="form-label" htmlFor="form2Example2">
                        Username
                      </label>
                      <div className="form-outline mb-1">
                        <input
                          type="text"
                          id="form2Example2"
                          className="form-control border border-dark rounded"
                          autoComplete="username"
                          name="username"
                          value={dataUser.username}
                          onChange={inputHandler}
                        />
                      </div>

                      {/* <!-- Default radio --> */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="flexRadioDefault1"
                          value="male"
                          onChange={inputHandler}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="flexRadioDefault2"
                          value="female"
                          onChange={inputHandler}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Female
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <label className="form-label" htmlFor="form2Example3">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example3"
                          className="form-control border border-dark rounded"
                          autoComplete="current-password"
                          name="password"
                          value={dataUser.password}
                          onChange={inputHandler}
                        />
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-danger btn-block mb-1"
                      >
                        Sign up
                      </button>
                    </form>
                    <NavLink to="/login">
                      <button
                        type="submit"
                        className="btn btn-danger btn-block mb-1"
                      >
                        Login
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
