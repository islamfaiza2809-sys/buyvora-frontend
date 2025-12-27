import { useEffect, useState } from "react";
import api from "../../api/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    api.get("/categories").then(res => setCategories(res.data));
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    await api.post("/categories", { name });
    setName("");
    const { data } = await api.get("/categories");
    setCategories(data);
  };

  const deleteCategory = async (id) => {
    await api.delete(`/categories/${id}`);
    setCategories(categories.filter(c => c._id !== id));
  };

  return (
    <>
      <div className="admin-header">
        <h1>Categories</h1>
      </div>

      <form className="admin-form" onSubmit={addCategory}>
        <input
          placeholder="Category name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button>Add Category</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th width="120">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat._id}>
              <td>{cat.name}</td>
              <td>
                <button
                  className="admin-btn delete"
                  onClick={() => deleteCategory(cat._id)}
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

export default Categories;
