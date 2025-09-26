import type { IconType } from "react-icons"
import { FaChalkboard, FaBorderAll } from "react-icons/fa"
import { MdOutlineSquare, MdOutlineDashboardCustomize, MdEventNote } from "react-icons/md"

export interface Category {
  key: string
  name: string
  icon: IconType
}

const categories: Category[] = [
  { key: "ALL", name: "Todos", icon: FaChalkboard },
  { key: "WHITE", name: "Pizarras Blancas", icon: MdOutlineSquare },
  { key: "CHALK", name: "Pizarras para Tiza", icon: FaChalkboard },
  { key: "GRID", name: "Pizarras Cuadriculadas", icon: FaBorderAll },
  { key: "CORK", name: "Pizarras de Corcho", icon: MdOutlineDashboardCustomize },
  { key: "PLANNER", name: "Pizarras de Planificación", icon: MdEventNote },
]

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.key, c.name])
)

export default categories
