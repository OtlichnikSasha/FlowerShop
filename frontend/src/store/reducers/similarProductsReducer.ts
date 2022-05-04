import {CellProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSimilarProducts} from "../../api/index";
const initialState : CellProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false
}

export const fetchSimilarProducts = createAsyncThunk(
    'similarProducts/fetchSimilarProducts',
    async (args: object) => {
        return await getSimilarProducts(args);
    }
)


const similarProductsSlice = createSlice({
    name: 'similarProducts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Получение товаров
            .addCase(fetchSimilarProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchSimilarProducts.fulfilled, (state: CellProductsState, action) => {
                console.log('cellProducts', action)
                state.loading = false
                state.products = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchSimilarProducts.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = similarProductsSlice

export default reducer



