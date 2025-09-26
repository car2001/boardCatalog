import { useState } from "react"
import ProductCard from "./ProductCard"
import { type Product } from "../data/products"

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [page, setPage] = useState<number>(1)
  const itemsPerPage = 10

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = products.slice(startIndex, endIndex)

  const totalPages = Math.ceil(products.length / itemsPerPage)

  return (
    <div className="w-full">
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paginatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Controles de paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-md border ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-green-700 border-green-700 hover:bg-green-50"
            }`}
          >
            Anterior
          </button>

          <span className="text-gray-700 font-medium">
            Página {page} de {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-md border ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-green-700 border-green-700 hover:bg-green-50"
            }`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductList
