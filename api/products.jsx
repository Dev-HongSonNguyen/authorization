import instance from "./instance";
export const getAllProduct = () => {
  return instance.get("products");
};
export const getOneProduct = (id) => {
  return instance.get("products/" + id);
};
export const addProduct = (product) => {
  return instance.post("products", product);
};
export const deleteProduct = (id) => {
  return instance.delete("products/" + id);
};
export const updateProduct = (product) => {
  return instance.put(`products/${product._id}`, product);
};
