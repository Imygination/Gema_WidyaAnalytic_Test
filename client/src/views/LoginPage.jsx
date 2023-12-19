import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:3000";

function LoginPage() {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setLoginInput({
      ...loginInput,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(loginInput, "ininihhhhh");
      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInput),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      sessionStorage.access_token = result.access_token;
      sessionStorage.email = result.email;
      sessionStorage.id = result.id;
      sessionStorage.username = result.username;
      sessionStorage.gender = result.gender;
      navigate("/");
    } catch (error) {
      console.log(error);
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
                      Login
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
                          value={loginInput.email}
                          onChange={inputHandler}
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example2"
                          className="form-control border border-dark rounded"
                          autoComplete="current-password"
                          name="password"
                          value={loginInput.password}
                          onChange={inputHandler}
                        />
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-danger btn-block mb-1"
                      >
                        Sign in
                      </button>
                      <NavLink to="/register">
                        <button
                          type="submit"
                          className="btn btn-danger btn-block mb-1"
                        >
                          Sign up
                        </button>
                      </NavLink>
                    </form>
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

export default LoginPage;
