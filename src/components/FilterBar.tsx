import React from "react"
import categories, { type Category } from "../data/categories"

interface FilterBarProps {
  selected: string
  onSelect: (key: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-full mt-4">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {categories.map((cat: Category) => {
          const Icon = cat.icon
          return (
            <button
              key={cat.key}
              onClick={() => onSelect(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border shadow-md text-sm font-medium transition-all duration-300 transform
                ${
                  selected === cat.key
                    ? "bg-green-700 text-white border-green-700 scale-105"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:scale-105"
                }`}
            >
              <Icon className="w-4 h-4" />
              {cat.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterBar
