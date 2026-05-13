export type Product = {
    id: number,
    title: string,
    description : string,
    images: string[],
    price: number
}

export type CartItem = Product & {
    qty: number,
    amount: number
}
