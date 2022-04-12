
export interface ProductsState {
    products: ProductState[],
    status: boolean | null,
    error: string | null,
    loading: boolean
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
    cellPercent: number
}
