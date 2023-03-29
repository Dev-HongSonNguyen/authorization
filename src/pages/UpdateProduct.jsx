import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = ({ update }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then(({ data }) => {
      const NewProduct = data.product;
      delete NewProduct.__v;
      setProduct(NewProduct);
    });
  }, []);
  const handelChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    update(product);
  };

  return (
    <div>
      <form className="container" onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          name="name"
          className="form-control"
          value={product.name}
          onChange={handelChange}
        />
        <br />
        <label htmlFor="">Price</label>
        <br />
        <input
          type="number"
          name="price"
          className="form-control"
          value={product.price}
          onChange={handelChange}
        />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <textarea
          type="text"
          className="form-control"
          name="description"
          value={product.description}
          onChange={handelChange}
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
