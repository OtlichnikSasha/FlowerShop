export interface ProductState{
    product: {
        id: number,
        name: string,
        categoryId: number,
        subcategoryId: number,
        price: number,
        cellPrice: number,
        description: string,
        views: number,
        cellPercent: number,
        photos: PhotoState[],
        favorite_products: [],
        basket_products: [{
            count: number
        }],
        details: any[]
    },
    status: boolean | null,
    error: string | null,
    loading: boolean
}

interface PhotoState {
    src: string,
}
