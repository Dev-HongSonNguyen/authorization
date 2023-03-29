import React, { useState } from "react";

const AddProduct = ({ create }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const handelChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    create(product);
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
          onChange={handelChange}
        />
        <br />
        <label htmlFor="">Price</label>
        <br />
        <input
          type="number"
          name="price"
          min="0"
          className="form-control"
          onChange={handelChange}
        />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <textarea
          type="text"
          className="form-control"
          onChange={handelChange}
          name="description"
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
