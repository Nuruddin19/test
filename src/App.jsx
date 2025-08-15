import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      setCategories(data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  // Temporary add
  const addCategory = () => {
    const newCat = { id: Date.now(), name: "New Category", subcategories: [] };
    setCategories([...categories, newCat]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Categories</h1>
      <button onClick={addCategory} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Add Category
      </button>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} className="mb-2">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
