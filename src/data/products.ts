export interface Product {
    id: number,
    name: string,
    category: string,
    description: string,
    price: string,
    oldPrice?: string,
    discount?: string,
    image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Pizarras Blancas con Soporte 1011-D",
    category: "WHITE",
    description: "Superficie de acero vitrificado con garantía de 25 años, incluye soporte con ruedas.",
    price: "S/ 950.00",
    oldPrice: "S/ 1,050.00",
    discount: "10%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-con-soporte-garantia-25-anos_1011-d.jpg"
  },
  {
    id: 2,
    name: "Pizarra Interactiva 1011-IN",
    category: "WHITE",
    description: "Interactiva superficie de acero vitrificado, ideal para aulas y presentaciones.",
    price: "S/ 1,400.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarra-interactiva-superficie-acero-vitrificado_1011in.jpg"
  },
  {
    id: 3,
    name: "Pizarra Blanca con Pentagramas 1011-P",
    category: "GRID",
    description: "Incluye pentagramas musicales, ideal para clases de música.",
    price: "S/ 1,100.00",
    oldPrice: "S/ 1,200.00",
    discount: "8%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-con-pentagramas_1011p.jpg"
  },
  {
    id: 4,
    name: "Pizarra Gris Garantía 25 años 1014",
    category: "WHITE",
    description: "Color gris con acabado mate y garantía de 25 años.",
    price: "S/ 1,200.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/soporte-para-mamparas-modulares_13.jpg"
  },
  {
    id: 5,
    name: "Serie Económica Blanca 502-1",
    category: "WHITE",
    description: "Modelo económico de madera de pino, ideal para uso doméstico.",
    price: "S/ 200.00",
    oldPrice: "S/ 230.00",
    discount: "15%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-economicas_502.jpg"
  },
  {
    id: 6,
    name: "Pizarra Cuadriculada Preescolar 11CF",
    category: "GRID",
    description: "Cuadrícula preescolar, ideal para aprender escritura.",
    price: "S/ 850.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-cuadriculadas-preescolar_400cf.jpg"
  },
  {
    id: 7,
    name: "Pizarras Blancas Volteables 11/11-3",
    category: "WHITE",
    description: "Pizarra doble cara con soporte de ruedas, ideal para girar según necesidad.",
    price: "S/ 1,300.00",
    oldPrice: "S/ 1,450.00",
    discount: "10%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-volteables_11-barra-11.jpg"
  },
  {
    id: 8,
    name: "Pizarras Verdes Económicas 503-2",
    category: "CHALK",
    description: "Acabado verde económico, marco de madera de pino.",
    price: "S/ 400.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-economicas_503.jpg"
  },
  {
    id: 9,
    name: "Pizarra Verde Antirreflejo 11V",
    category: "CHALK",
    description: "Superficie verde mate antirreflectante, ideal para evitar brillos.",
    price: "S/ 1,000.00",
    oldPrice: "S/ 1,150.00",
    discount: "13%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-semi-brillo-garantia-10-anos_11vs.jpg"
  },
  {
    id: 10,
    name: "Pizarra Metálica Planificación Semanal",
    category: "PLANNER",
    description: "Planificador metálico semanal, ideal para oficina o sala de juntas.",
    price: "S/ 600.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/planificacion-semanal_pls.jpg"
  },
  {
    id: 11,
    name: "Pizarra Metálica Planificación Mensual",
    category: "PLANNER",
    description: "Planificador mensual metálico con espacio para notas.",
    price: "S/ 800.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/planificacion-mensual_plm.jpg"
  },
  {
    id: 12,
    name: "Pizarra de Corcho 80×60",
    category: "CORK",
    description: "Corcho natural con marco de madera, ideal para anuncios.",
    price: "S/ 450.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/soporte-para-mamparas-modulares_13.jpg"
  },
  {
    id: 13,
    name: "Pizarra Doble Cara Blanca PAB-2",
    category: "WHITE",
    description: "Doble cara blanca con marco de aluminio, superficie estratificada.",
    price: "S/ 1,350.00",
    oldPrice: "S/ 1,500.00",
    discount: "10%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-doble-cara-garantia-10-anos_pab.jpg"
  },
  {
    id: 14,
    name: "Pizarra Blanca Mate 1R11-4",
    category: "WHITE",
    description: "Superficie mate especial, ideal para proyecciones y clases.",
    price: "S/ 1,250.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-mate-garantia-25-anos_1r11.jpg"
  },
  {
    id: 15,
    name: "Pizarra Verde Semi-Brillo 11VS",
    category: "CHALK",
    description: "Verde semi-brillo con garantía de 3 años.",
    price: "S/ 1,050.00",
    oldPrice: "S/ 1,200.00",
    discount: "12%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-semi-brillo-garantia-10-anos_11vs.jpg"
  },
  {
    id: 16,
    name: "Pizarra Verde con Pentagramas 11VP",
    category: "GRID",
    description: "Pentagramas sobre fondo verde, ideal para música.",
    price: "S/ 1,100.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-con-pentagramas_11vp.jpg"
  },
  {
    id: 17,
    name: "Pizarra Gris Garantía 2 años 14",
    category: "WHITE",
    description: "Color gris suave, garantía de 2 años.",
    price: "S/ 700.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-garantia-2-anos_14.jpg"
  },
  {
    id: 18,
    name: "Pizarra Verde Serie Económica 14V--5",
    category: "CHALK",
    description: "Economica, madera de pino y superficie verde.",
    price: "S/ 500.00",
    oldPrice: "S/ 550.00",
    discount: "9%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-garantia-10-anos_14v.jpg"
  },
  {
    id: 19,
    name: "Pizarra Azules Garantía 25 años 1013-4",
    category: "WHITE",
    description: "Acabado azul vibrante, garantía extendida.",
    price: "S/ 1,400.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-azules-garantia-25-anos_1013.jpg"
  },
  {
    id: 20,
    name: "Pizarra Blanca Garantía 5 años 11M",
    category: "WHITE",
    description: "Acero vitrificado con garantía de 5 años.",
    price: "S/ 1,100.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-garantia-5-anos_11m.jpg"
  },
  {
    id: 21,
    name: "Pizarra Verde Garantía 5 años 14V",
    category: "CHALK",
    description: "Verde mate antirreflectante con garantía de 5 años.",
    price: "S/ 1,300.00",
    oldPrice: "S/ 1,450.00",
    discount: "10%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-garantia-10-anos_14v.jpg"
  },
  {
    id: 22,
    name: "Pizarra Económica Blanca 400-2",
    category: "WHITE",
    description: "Modelo económico de menor tamaño para espacios pequeños.",
    price: "S/ 300.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-garantia-10-anos_400.jpg"
  },
  {
    id: 23,
    name: "Pizarra Negra/Verde Oscura 403-3",
    category: "CHALK",
    description: "Color oscuro, ideal con tiza pastel para contraste.",
    price: "S/ 650.00",
    oldPrice: "S/ 720.00",
    discount: "9%",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-verdes-garantia-2-anos_403.jpg"
  },
  {
    id: 24,
    name: "Pizarra Doble Uso Corcho-Blanca 603-2",
    category: "CORK",
    description: "Mitad corcho, mitad pizarra blanca, ideal para anuncios y notas.",
    price: "S/ 900.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-blancas-doble-uso_603.jpg"
  },
  {
    id: 25,
    name: "Pizarras Volteables 11/11-4",
    category: "WHITE",
    description: "Volteables con marco de aluminio y estructura robusta con ruedas.",
    price: "S/ 1,450.00",
    image: "https://www.faibo.com/wp-content/uploads/productes/pizarras-volteables_1011-barra-1011.jpg"
  }
]

export default products
