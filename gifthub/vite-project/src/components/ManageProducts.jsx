
import React, { useState, useEffect } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const saveProductsToStorage = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleShowModal = (product = null) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    saveProductsToStorage(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      price: parseFloat(formData.get("price")),
      category: formData.get("category"),
    };

    if (currentProduct) {
      const updatedProducts = products.map((p) =>
        p === currentProduct ? newProduct : p
      );
      saveProductsToStorage(updatedProducts);
    } else {
      saveProductsToStorage([...products, newProduct]);
    }
    handleCloseModal();
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Manage Products</h2>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleShowModal()}>Add Product</button>
      </div>
      
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (Rs.)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)}</td>
              <td>{product.category}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowModal(product)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{currentProduct ? "Edit Product" : "Add Product"}</h5>
                <button type="button" className="close" onClick={handleCloseModal}>&times;</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" className="form-control" defaultValue={currentProduct?.name || ""} required />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" className="form-control" defaultValue={currentProduct?.price || ""} required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <input type="text" name="category" className="form-control" defaultValue={currentProduct?.category || ""} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" className="btn btn-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
