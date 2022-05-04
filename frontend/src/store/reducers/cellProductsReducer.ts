import {CellProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCellProducts} from "../../api/index";
const initialState : CellProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false
}

export const fetchCellProducts = createAsyncThunk(
    'cellProducts/fetchCellProducts',
    async () => {
        return await getCellProducts();
    }
)


const cellProductsSlice = createSlice({
    name: 'cellProducts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Получение товаров
            .addCase(fetchCellProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchCellProducts.fulfilled, (state: CellProductsState, action) => {
                console.log('cellProducts', action)
                state.loading = false
                state.products = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchCellProducts.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = cellProductsSlice

export default reducer



