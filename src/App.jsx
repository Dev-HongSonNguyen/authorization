import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import axios from "axios";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {
  getAllProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../api/products";

function App() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data.products));
  }, []);
  //delete
  const handelRemove = async (id) => {
    try {
      await deleteProduct(id).then(() => {
        const newProduct = product.filter((item) => item._id !== id);
        setProduct(newProduct);
      });
    } catch (error) {
      console.log(error);
    }
  };
  //create
  const add = async (product) => {
    try {
      await addProduct(product);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  const update = async (product) => {
    try {
      await updateProduct(product);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route
              index
              element={
                <Products
                  data={product}
                  remove={handelRemove}
                  setProduct={setProduct}
                />
              }
            />
            <Route path="add" element={<AddProduct create={add} />} />
            <Route path=":id" element={<UpdateProduct update={update} />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
