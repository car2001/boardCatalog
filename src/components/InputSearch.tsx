import React from "react"

interface InputSearchProps {
  value: string
  onChange: (value: string) => void
}

const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
  return (
    <div className="mt-4 bg-white w-full p-2 h-12 border border-gray-300 rounded-2xl text-gray-600 shadow-sm">
      <input
        className="bg-transparent w-full h-full border-none focus:ring-0 px-3"
        type="search"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder="🔍︎ Buscar productos..."
      />
    </div>
  )
}

export default InputSearch
