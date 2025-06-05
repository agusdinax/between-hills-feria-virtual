// src/data/productsData.ts

import type { Product } from '../types'

const productsData: Product[] = [
  {
    id: 1,
    name: 'Campera MLB',
    description: 'Campera oficial MLB estilo streetwear',
    category: 'Camperas',
    images: ['src/assets/camiseta1.jpg', 'src/assets/camiseta1.jpg'],
    price: 150.0,
  },
  {
    id: 2,
    name: 'Campera MLB',
    description: 'Campera oficial MLB estilo streetwear',
    category: 'Camperas',
    images: ['/src/assets/camiseta1.jpg', 'src/assets/camiseta1.jpg'],
    price: 150.0,
  },
  // Puedes agregar más productos aquí...
]

export default productsData
