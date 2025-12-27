import { useEffect, useState } from "react";
import api from "../../api/api";

function ProductForm({ editProduct, onSaved }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories").then(res => setCategories(res.data));
    if (editProduct) setForm(editProduct);
  }, [editProduct]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (editProduct) {
      await api.put(`/products/${editProduct._id}`, form);
    } else {
      await api.post("/products", form);
    }

    onSaved();
  };

  return (
    <form className="admin-form" onSubmit={submitHandler}>
      <input placeholder="Product name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input type="number" placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />

      <textarea placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <input placeholder="Image URL"
        value={form.image}
        onChange={e => setForm({ ...form, image: e.target.value })}
      />

      <select
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map(c => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>

      <button>
        {editProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
