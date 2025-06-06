import type { Product } from '../types'

// JEANS
import levis1 from '../assets/jeans/levis1.jpg'
import levis2 from '../assets/jeans/levis2.jpg'
import levis3 from '../assets/jeans/levis3.jpg'
import jardinero from '../assets/jeans/jardinero.jpg'
import cuestazul from '../assets/jeans/cuestazul.jpg'
import cargol from '../assets/jeans/cargol.jpg'
import cenitho from '../assets/jeans/cenitho.jpg'
import t44 from '../assets/jeans/t44.jpg'
import pollera1 from '../assets/jeans/pollera1.jpg'
import pollera2 from '../assets/jeans/pollera2.jpg'

// REMERAS
import remera1 from '../assets/remera/remera1.jpg'
import remera2 from '../assets/remera/remera2.jpg'
import remera3 from '../assets/remera/remera3.jpg'
import remera4 from '../assets/remera/remera4.jpg'
import remera5 from '../assets/remera/remera5.jpg'
import remera6 from '../assets/remera/remera6.jpg'
import remera7 from '../assets/remera/remera7.jpg'
import remera8 from '../assets/remera/remera8.jpg'
import remera9 from '../assets/remera/remera9.jpg'
import remera10 from '../assets/remera/remera10.jpg'
import remera11 from '../assets/remera/remera11.jpg'
import remera12 from '../assets/remera/remera12.jpg'
import remera13 from '../assets/remera/remera13.jpg'
import remera14 from '../assets/remera/remera14.jpg'
import r35001 from '../assets/remera/35001.jpg'
import r35002 from '../assets/remera/35002.jpg'
import r35003 from '../assets/remera/35003.jpg'
import r35004 from '../assets/remera/35004.jpg'
import r35005 from '../assets/remera/35005.jpg'
import r35006 from '../assets/remera/35006.jpg'
import r35007 from '../assets/remera/35007.jpg'
import larga1 from '../assets/remera/larga1.jpg'
import larga2 from '../assets/remera/larga2.jpg'
import corta1 from '../assets/remera/corta1.jpg'
import corta2 from '../assets/remera/corta2.jpg'
import corta3 from '../assets/remera/corta3.jpg'
import corta4 from '../assets/remera/corta4.jpg'
import corta5 from '../assets/remera/corta5.jpg'
import corta6 from '../assets/remera/corta6.jpg'

// CALZAS
import calzas1 from '../assets/calzas/calzas1.jpg'
import calzas2 from '../assets/calzas/calzas2.jpg'
import calzas3 from '../assets/calzas/calzas3.jpg'
import calzas4 from '../assets/calzas/calzas4.jpg'

// CAMPERAS
import peluchito1 from '../assets/campera/peluchito1.jpg'
import roja from '../assets/campera/roja.jpg'
import wrangler1 from '../assets/campera/wrangler1.jpg'
import wrangler2 from '../assets/campera/wrangler2.jpg'
import camperita1 from '../assets/campera/camperita1.jpg'
import camperita2 from '../assets/campera/camperita2.jpg'
import blazer from '../assets/campera/blazer.jpg'

// SWEETER
import sweeter1 from '../assets/sweeter/sweeter1.jpg'
import sweeter2 from '../assets/sweeter/sweeter2.jpg'
import sweeter3 from '../assets/sweeter/sweeter3.jpg'
import sweeter4 from '../assets/sweeter/sweeter4.jpg'
import sweeter5 from '../assets/sweeter/sweeter5.jpg'
import sweeter6 from '../assets/sweeter/sweeter6.jpg'
import sweeter7 from '../assets/sweeter/sweeter7.jpg'
import sweeter8 from '../assets/sweeter/sweeter8.jpg'
import sweeter9 from '../assets/sweeter/sweeter9.jpg'
import sweeter10 from '../assets/sweeter/sweeter10.jpg'
import sweeter11 from '../assets/sweeter/sweeter11.jpg'
import sweeter12 from '../assets/sweeter/sweeter12.jpg'
import sweeter13 from '../assets/sweeter/sweeter13.jpg'
import sweeter14 from '../assets/sweeter/sweeter14.jpg'
import sweeter15 from '../assets/sweeter/sweeter15.jpg'
import sweeter16 from '../assets/sweeter/sweeter16.jpg'
import sweeter17 from '../assets/sweeter/sweeter17.jpg'
import sweeter18 from '../assets/sweeter/sweeter18.jpg'
import sweeter19 from '../assets/sweeter/sweeter19.jpg'
import sweeter20 from '../assets/sweeter/sweeter20.jpg'
import sweeter21 from '../assets/sweeter/sweeter21.jpg'

// CARTERAS
import cartera1 from '../assets/cartera/cartera1.jpg'
import cartera2 from '../assets/cartera/cartera2.jpg'
import cartera3 from '../assets/cartera/cartera3.jpg'
import cartera4 from '../assets/cartera/cartera4.jpg'
import cartera5 from '../assets/cartera/cartera5.jpg'
import cartera6 from '../assets/cartera/cartera6.jpg'
import cartera7 from '../assets/cartera/cartera7.jpg'
import cartera8 from '../assets/cartera/cartera8.jpg'

// VARIOS
import pijama from '../assets/varios/pijama.jpg'

const productsData: Product[] = [
  {
    id: 1,
    name: 'JEAN LEVIS TALLE 34',
    description: 'JEAN LEVIS ORIGINAL TALLE 34',
    category: 'Jean',
    images: [levis1, levis2, levis3],
    price: "30.000",
    condition: 'Usado',
  },
  {
    id: 2,
    name: 'REMERAS VARIAS MANGA CORTA MUJER',
    description: 'Remeras manga corta de mujer, en la mayoria son talles amplios M-L',
    category: 'Remera',
    images: [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8, remera9, remera10, remera11, remera12, remera13, remera14],
    price: "5.000 C/U",
    condition: 'Usado',
  },
  {
    id: 3,
    name: 'CALZAS DEPORTIVAS MUJER VARIAS',
    description: 'Calzas deportivas de mujer, talles amplios L. Key Whoss, Lulea.',
    category: 'Calza',
    images: [calzas1, calzas2, calzas3, calzas4],
    price: "12.000 C/U",
    condition: 'Usado',
  },
  {
    id: 4,
    name: 'CAMPERA PARCA CON PELUCHITO',
    description: 'Campera mujer con peluche, usada. Talle L',
    category: 'Campera',
    images: [peluchito1],
    price: "30.000",
    condition: 'Usado',
  },
  {
    id: 5,
    name: 'CAMPERA ROJA XL TMILL',
    description: 'Campera Roja XL TMILL. Usada',
    category: 'Campera',
    images: [roja],
    price: "30.000",
    condition: 'Usado',
  },
  {
    id: 6,
    name: 'Sweeter Mujer Varios',
    description: 'Sweeters para mujeres. Varios usados. Talles Amplios M-L',
    category: 'Sweeter',
    images: [sweeter1, sweeter2, sweeter3, sweeter4, sweeter5, sweeter6, sweeter7, sweeter8, sweeter9, sweeter10, sweeter11, sweeter12, sweeter13, sweeter14, sweeter15, sweeter16, sweeter17, sweeter18, sweeter19, sweeter20, sweeter21],
    price: 'Consultar precio',
    condition: 'Usado'
  },
  {
    id: 7,
    name: 'CAMPERA WRANGLER HOMBRE TALLE M',
    description: 'Campera Wrangler Talle M. Usada',
    category: 'Campera',
    images: [wrangler1, wrangler2],
    price: "34.000",
    condition: 'Usado',
  },
  {
    id: 8,
    name: 'PIJAMA LARGO MUJER TALLE 1',
    description: 'Pijama para mujer largo talle 1. Poco Uso. Completo con parte de arriba y de abajo.',
    category: 'Pijama',
    images: [pijama],
    price: "15.000",
    condition: 'Usado',
  },
  {
    id: 9,
    name: ' Carteras Varias',
    description: 'Varias carteras, consultar precio.',
    category: 'Cartera',
    images: [cartera1, cartera2, cartera3, cartera4, cartera5, cartera6, cartera7, cartera8],
    price: "Consultar Precio",
    condition: 'Usado',
  },
  {
    id: 10,
    name: 'Camperitas Varias',
    description: 'Camperas Varias. Amplias Talle L',
    category: 'Campera',
    images: [camperita1, camperita2],
    price: "10.000 C/U",
    condition: 'Usado',
  },
  {
    id: 11,
    name: 'JARDINERO CORTO TIPO POLLERA',
    description: 'JARDINERO CORTO TIPO POLLERA TALLE 38',
    category: 'Jean',
    images: [jardinero],
    price: "20.000",
    condition: 'Usado',
  },
  {
    id: 12,
    name: 'JEAN MUJER CUESTA AZUL T34',
    description: 'JEAN MUJER CUESTA AZUL TALLE 34',
    category: 'Jean',
    images: [cuestazul],
    price: "15.000",
    condition: 'Usado',
  },
  {
    id: 13,
    name: 'CARGO NEGRO MUJER TALLER L',
    description: 'CARGO NEGRO MUJER TALLER L',
    category: 'Jean',
    images: [cargol],
    price: "15.000",
    condition: 'Usado',
  },
  {
    id: 14,
    name: 'JEAN CENITHO MUJER TALLE 36',
    description: 'JEAN MUJER CENITHO TALLE 36',
    category: 'Jean',
    images: [cenitho],
    price: "15.000",
    condition: 'Usado',
  },
  {
    id: 15,
    name: 'JEAN MUJER TALLE 44',
    description: 'JEAN PARA MUJER TALLER 44',
    category: 'Jean',
    images: [t44],
    price: "15.000",
    condition: 'Usado',
  },
  {
    id: 16,
    name: 'POLLERAS LARGAS MUJER',
    description: 'POLLERAS LARGAS MUJER TALLE GRANDE',
    category: 'Pollera',
    images: [pollera1, pollera2],
    price: "12.000 C/U",
    condition: 'Usado',
  },
  {
    id: 17,
    name: 'BLAZER MUJER OSCAR DE LA RENTA',
    description: 'BLAZER MUJER OSCAR DE LA RENTA TERCIOPELO VIOLELTA TALLE M',
    category: 'Campera',
    images: [blazer],
    price: "27.000",
    condition: 'Usado',
  },
  {
    id: 18,
    name: 'REMERAS MUJER TALLE L MUSCULOSAS',
    description: 'REMERAS MUJER TALLE L AMPLIAS Y MUSCULOSAS',
    category: 'Remera',
    images: [r35002, r35001, r35003, r35004, r35005, r35006, r35007],
    price: "3.500 C/U",
    condition: 'Usado',
  },
  {
    id: 19,
    name: 'REMERAS DEPORTIVAS MANGAS LARGAS KEY WHOSS',
    description: 'REMERAS MANGAS LARGAS KEYWHOSS MUJER TALLE L',
    category: 'Remera',
    images: [larga1, larga2],
    price: "12.000 C/U",
    condition: 'Usado',
  },
  {
    id: 20,
    name: 'REMERAS DEPORTIVAS MANGA CORTA',
    description: 'REMERAS DEPORTIVAS MUJER TALLE L GRANDES MANGA CORTA OSX, ADMIT ONE, NIKE',
    category: 'Remera',
    images: [corta1, corta2, corta3, corta4, corta5, corta6],
    price: "Consultar precio",
    condition: 'Usado',
  },
]

export default productsData
