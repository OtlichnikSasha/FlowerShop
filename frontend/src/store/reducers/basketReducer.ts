import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {BasketState} from "../../types/basket";
import {addToBasket, getBasket, removeFromBasket} from "../../api/index";

const initialState : BasketState = {
    basket: [],
    status: false,
    error: '',
    loading: false,
    orderPrice: 0
}

export const fetchBasket = createAsyncThunk(
    'basket/fetchBasket',
    async (args: object) => {
        return getBasket(args);
    }
)

interface AddBasketData{
    userId: number,
    productId: number,
    count: number
}
export const fetchAddBasket = createAsyncThunk(
    'basket/fetchAddBasket',
    async (data: AddBasketData) => {
        return addToBasket(data);
    }
)

export const fetchRemoveBasket = createAsyncThunk(
    'basket/fetchRemoveBasket',
    async (args: object) => {
        return removeFromBasket(args);
    }
)

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        clearBasket: state => {
            //@ts-ignore
            state.basket = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.pending, state => {
                state.loading = true
            })
            .addCase(fetchBasket.fulfilled, (state: BasketState, action) => {
                state.loading = false
                state.basket = action.payload.data
                state.status = action.payload.status
                action.payload.data.map(product => {
                    // @ts-ignore
                    state.orderPrice += product.product.cellPrice * product.product.basket_products[0].count
                })
            })
            .addCase(fetchBasket.rejected, state => {
                state.loading = false
            })

            .addCase(fetchAddBasket.pending, state => {
                state.loading = true
            })
            .addCase(fetchAddBasket.fulfilled, (state: BasketState, action) => {
                console.log('basket', action.payload)
                state.loading = false
                state.status = action.payload.status
            })
            .addCase(fetchAddBasket.rejected, state => {
                state.loading = false
            })


            .addCase(fetchRemoveBasket.pending, state => {
                state.loading = true
            })
            .addCase(fetchRemoveBasket.fulfilled, (state: BasketState, action) => {
                console.log('basket', action.payload)
                state.loading = false
                state.status = action.payload.status
            })
            .addCase(fetchRemoveBasket.rejected, state => {
                state.loading = false
            })


            .addDefaultCase(() => {
            })
    }
})

const { reducer } = basketSlice

export default reducer
