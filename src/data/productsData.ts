import type { Product } from '../types'

const productsData: Product[] = [
  {
    id: 1,
    name: 'JEAN LEVIS TALLE 34',
    description: 'JEAN LEVIS ORIGINAL TALLE 34 NADA DE USO',
    category: 'Jeans',
    images: ['src/assets/jeans/levis1.jpg', 'src/assets/levis2.jpg', 'src/assets/levis3.jpg'],
    price: "30.000",
  },
  {
    id: 2,
    name: 'Campera MLB',
    description: 'Campera oficial MLB estilo streetwear',
    category: 'Camperas',
    images: ['/src/assets/camiseta1.jpg', 'src/assets/camiseta1.jpg'],
    price: "150.0",
  },
]

export default productsData
