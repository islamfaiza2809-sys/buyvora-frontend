import { useEffect, useState } from "react";
import api from "../../api/api";
import ProductForm from "./ProductForm";

function Products() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const loadProducts = async () => {
    const { data } = await api.get("/products");
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    loadProducts();
  };

  return (
    <>
      <div className="admin-header">
        <h1>Products</h1>
      </div>

      <ProductForm
        editProduct={editProduct}
        onSaved={() => {
          setEditProduct(null);
          loadProducts();
        }}
      />

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th width="180">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category?.name}</td>
              <td>
                <button
                  className="admin-btn edit"
                  onClick={() => setEditProduct(p)}
                >
                  Edit
                </button>{" "}
                <button
                  className="admin-btn delete"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
