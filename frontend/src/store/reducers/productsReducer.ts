import {ProductsState} from "../../types/products";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts, sortingProduct, getProductsData} from "../../api/index";
const initialState : ProductsState = {
    products: [],
    status: false,
    error: '',
    loading: false,

    max_price: null,
    min_price: null,
    pages: null
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (args: object) => {
        return await getProducts(args);
    }
)

export const fetchProductsData = createAsyncThunk(
    'products/fetchProductsData',
    async (args: object) => {
        return await getProductsData(args);
    }
)


export const fetchSortingProducts = createAsyncThunk(
    'products/fetchSortingProducts',
    async (args: object) => {
        return await sortingProduct(args);
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Получение товаров
            .addCase(fetchProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state: ProductsState, action) => {
                console.log('products', action)
                state.loading = false
                state.products = action.payload.data
                state.status = action.payload.status
                state.error = ''
            })
            .addCase(fetchProducts.rejected, state => {
                state.loading = false
            })
            // Сортировка
            .addCase(fetchSortingProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchSortingProducts.fulfilled, (state: ProductsState, action) => {
                console.log('sortingProducts', action)
                state.loading = false
                state.products = action.payload.data
                state.status = true
                state.error = ''
            })
            .addCase(fetchSortingProducts.rejected, state => {
                state.loading = false
            })
            // Получение данных товаров
            .addCase(fetchProductsData.pending, state => {
                state.loading = true
            })
            .addCase(fetchProductsData.fulfilled, (state: ProductsState, action) => {
                console.log('ProductsData', action)
                state.loading = false
                //@ts-ignore
                state.max_price = action.payload?.data.max_price
                //@ts-ignore
                state.min_price = action.payload?.data.min_price
                //@ts-ignore
                state.pages = action.payload?.data.pages
                state.status = true
                state.error = ''
            })
            .addCase(fetchProductsData.rejected, state => {
                state.loading = false
            })


            .addDefaultCase(() => {
            })
    }
})

const { reducer } = productsSlice

export default reducer



