const products = [
    {
        id: '1',
        name: 'Pearl Reference Pure',
        price: 990000,
        category: 'pearl',
        img: 'https://tiendafeedback.com.ar/14983-large_default/bateria-pearl-reference-pure-3-cuerpos-black-white-oyster.jpg',
        stock: 25,
        description: 'Cuerpos | B24 - T13 - TF16x16 | Cáscaras de arce - Abedul - Caoba Africana | Black White Oyster'
    },

    {
        id: '2',
        name: 'Mapex Black Phanter',
        price: 900000,
        category: 'mapex',
        img: 'https://tiendafeedback.com.ar/13731-large_default/bateria-mapex-black-panther-velvetone-butter-burst-5-cuerpos.jpg',
        stock: 11,
        description: 'Desing Lab | Cherry Bomb | 4 Cuerpos | B22x16 T12X8 TF14x14 TF16x16'
    },

    {
        id: '3',
        name: 'TAMA SuperStar H-Drive',
        price: 810000,
        category: 'tama',
        img: 'https://tiendafeedback.com.ar/30701-large_default/bateria-tama-superstar-hyper-drive-4-cuerpos-dark-mocha-fade.jpg',
        stock: 10,
        description: '| 4 Cuerpos | Midnight Gold Sparkle | Bombo 22X18" | Tom1 10X6,5" | Tom2 12X7" | TomPiso 16X14" | Maple'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}