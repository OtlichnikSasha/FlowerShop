import {ProductState} from "./products";

export interface BasketState {
    basket: BasketEntity,
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export interface BasketEntity{
    products: ProductState[]
}
