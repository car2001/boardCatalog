import { type Product } from "../data/products"
import { categoryMap } from "../data/categories"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs mx-auto hover:shadow-xl hover:scale-105 transition-transform duration-300">

      {/* Etiqueta de descuento */}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md z-10">
          {product.discount} OFF
        </div>
      )}

      {/* Imagen */}
      <div className="w-full h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full drop-shadow-md"
        />
      </div>

      {/* Texto */}
      <div className="p-4 flex flex-col gap-2 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
            {categoryMap[product.category] ?? product.category}
        </p>
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>

        {/* Precios */}
        <div className="mt-2">
          <p className="text-lg font-extrabold text-green-700">
            Llévala por {product.price}
          </p>
          {product.oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
