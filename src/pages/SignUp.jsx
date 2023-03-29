import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handelChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(name, value);
  };

  const SignUp = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/signup", user);
      alert("Đăng ký thành công");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4>Đăng ký</h4>
      <form action="" className="container" onSubmit={SignUp}>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          onChange={handelChange}
        />
        <br />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handelChange}
        />
        <br />
        <input
          type="text"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handelChange}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handelChange}
        />
        <br />
        <button>Đăng ký</button>
      </form>
    </div>
  );
};

export default SignUp;
