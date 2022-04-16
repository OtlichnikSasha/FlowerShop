
export interface ProductsState {
    products: ProductState[],
    status: boolean | null,
    error: string | null,
    loading: boolean,

    max_price? : number | null,
    min_price? : number | null,
    pages? : number | null
}

interface ProductState{
    id: number,
    name: string,
    categoryId: number,
    subCategoryId: number,
    price: number,
    cellPrice: number,
    description: string,
    views: number,
    cellPercent: number,
    photos: ProductPhotos[]
}

interface ProductPhotos {
    src: string,
    productId: number
}
