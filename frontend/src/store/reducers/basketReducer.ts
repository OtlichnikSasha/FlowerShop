import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {BasketState} from "../../types/basket";
import {addToBasket, getBasket} from "../../api/index";

const initialState : BasketState = {
    //@ts-ignore
    basket: {},
    status: false,
    error: '',
    loading: false
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
                console.log('basket', action.payload)
                state.loading = false
                //@ts-ignore
                state.basket = action.payload.data.basket
                state.status = action.payload.status
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
                //@ts-ignore
                state.basket = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchAddBasket.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = basketSlice

export default reducer
