import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ data, remove, setProduct }) => {
  const Delete = (id) => {
    remove(id);
  };
  // render lai sau khi them sua xoa
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then(({ data }) => setProduct(data.products));
  }, []);
  return (
    <div>
      <Link to={"/products/add"} className="btn btn-dark">
        Add New
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => Delete(item._id)}
                  >
                    Remove
                  </button>
                  <Link
                    className="btn btn-success"
                    to={`/products/${item._id}`}
                  >
                    Update
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
