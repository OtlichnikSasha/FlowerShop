import {ProductState} from "./products";

export interface BasketState {
    basket: BasketData[],
    status: boolean | null,
    error: string | null,
    loading: boolean,
    orderPrice: number
}

export interface BasketData{
    product: ProductState,
    productId: number
}
