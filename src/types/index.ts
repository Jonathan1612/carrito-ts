export interface Product  {
    id: number
    name: string
    image: string
    description: string
    price: number
}

 export interface ProductItem extends Product {
    quantity: number
}

export type ProductID = Product['id']

// export type ProductItem = Pick<Product, "id" | "name" | 'price'> & {
//     queantity: number
// }

// export interface ProductItem extends Product {
//     quentity: number
// }