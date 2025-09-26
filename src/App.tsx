import { useState, useEffect } from "react";

import "./App.css";

import InputSearch from "./components/InputSearch";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";

import localProducts from "./data/products";

function App() {
  const [products, setProducts] = useState(localProducts); // Estado para productos
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSelectCategory = (catKey: string) => {
    setSelectedCategory(catKey);
    setSearchTerm("");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        if (!response.ok) {
          throw new Error("Error al cargar productos desde API");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.warn("No se pudo cargar la API, usando productos locales", error);
        setProducts(localProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "ALL" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen p-6 w-full">
      {/* Encabezado */}
      <h1
        className="text-6xl sm:text-7xl text-center mb-10 text-green-900 drop-shadow-lg tracking-wide"
        style={{ fontFamily: "'Fredericka the Great', cursive" }}
      >
        CATÁLOGO DE PIZARRAS
      </h1>

      {/* Buscador y filtros */}
      <div className="max-w-4xl mx-auto mb-10">
        <InputSearch value={searchTerm} onChange={setSearchTerm} />
        <FilterBar selected={selectedCategory} onSelect={handleSelectCategory} />
      </div>

      {/* Grid de productos */}
      {loading ? <p className="text-center">Cargando productos...</p> : <ProductList products={filteredProducts} />}
    </div>
  );
}

export default App;
