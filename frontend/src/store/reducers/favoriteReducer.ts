import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addFavorite, getFavoritesProducts, removeFavorite} from "../../api/index";
import {FavoritesState} from "../../types/products";


const initialState : FavoritesState = {
    products: [],
    status: false,
    error: '',
    loading: false
}

export const fetchFavoritesProducts = createAsyncThunk(
    'favorite/fetchFavoritesProducts',
    async (args: object) => {
        return await getFavoritesProducts(args);
    }
)

export const fetchAddFavorite = createAsyncThunk(
    'favorite/fetchAddFavorite',
    async (data: object) => {
        return await addFavorite(data);
    }
)


export const fetchRemoveFavorite = createAsyncThunk(
    'favorite/fetchRemoveFavorite',
    async (args: object) => {
        return await removeFavorite(args);
    }
)


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Избранные товары
            .addCase(fetchFavoritesProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchFavoritesProducts.fulfilled, (state: FavoritesState, action) => {
                console.log('products', action)
                state.loading = false
                state.products = action.payload.data
                state.status = action.payload.status
                state.error = action.payload.error
            })
            .addCase(fetchFavoritesProducts.rejected, state => {
                state.loading = false
            })


            .addCase(fetchAddFavorite.pending, state => {
                state.loading = true
            })
            .addCase(fetchAddFavorite.fulfilled, (state:FavoritesState, action) => {
                console.log('product', action.payload)
                state.loading = false
                state.status = action.payload.status
            })
            .addCase(fetchAddFavorite.rejected, state => {
                state.loading = false
            })

            .addCase(fetchRemoveFavorite.pending, state => {
                state.loading = true
            })
            .addCase(fetchRemoveFavorite.fulfilled, (state:FavoritesState, action) => {
                console.log('product', action.payload)
                state.loading = false
                state.status = action.payload.status
            })
            .addCase(fetchRemoveFavorite.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = favoriteSlice

export default reducer
