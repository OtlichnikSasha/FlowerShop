
export interface ProductsState {
    products: ProductState[],
    status: boolean | null,
    error: string | null,
    loading: boolean,

    max_price? : number | null,
    min_price? : number | null,
    pages? : number | null
}

export interface ProductState{
    id: number,
    name: string,
    categoryId: number,
    subCategoryId: number,
    price: number,
    cellPrice: number,
    description: string,
    views: number,
    cellPercent: number,
    photos: ProductPhotos[],
    favorite_products: [],
    basket_products: [{
        count: number
    }]
}

interface ProductPhotos {
    src: string,
    productId: number
}
