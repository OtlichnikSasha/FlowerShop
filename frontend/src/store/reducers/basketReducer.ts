import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {BasketState} from "../../types/basket";
import {getBasket} from "../../action-creators/BasketActionCreators";

const initialState : BasketState = {
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

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        clearBasket: state => {
            state.basket = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.pending, state => {
                state.loading = true
            })
            .addCase(fetchBasket.fulfilled, (state, action) => {
                console.log('basket', action.payload)
                state.loading = false
                state.basket = action.payload
                state.status = true
            })
            .addCase(fetchBasket.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = basketSlice

export default reducer
