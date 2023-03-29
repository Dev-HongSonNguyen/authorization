import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {});
  const handelChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const SignIn = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/signin", user)
        .then(({ data }) => {
          const token = data.accessToken;
          localStorage.setItem("user", JSON.stringify(token));
          alert("Dang nhap thanh cong !");
          navigate("/products");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4 className="coloe">Đăng nhập</h4>
      <form action="" className="container" onSubmit={SignIn}>
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
        <button>Đăng nhập</button>
      </form>
    </div>
  );
};

export default SignIn;
