export interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  images: string[]
  condition: 'Nuevo' | 'Usado'
  sport?: string
}
