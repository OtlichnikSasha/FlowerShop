import {ProductState} from "../../types/product";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addFavorite, removeFavorite} from "../../api/index";


const initialState : ProductState = {
    // @ts-ignore
    product: {},
    status: false,
    error: '',
    loading: false
}
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
            .addCase(fetchAddFavorite.pending, state => {
                state.loading = true
            })
            .addCase(fetchAddFavorite.fulfilled, (state, action) => {
                console.log('product', action.payload)
                state.loading = false
                // @ts-ignore
                state.product = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchAddFavorite.rejected, state => {
                state.loading = false
            })

            .addCase(fetchRemoveFavorite.pending, state => {
                state.loading = true
            })
            .addCase(fetchRemoveFavorite.fulfilled, (state, action) => {
                console.log('product', action.payload)
                state.loading = false
                // @ts-ignore
                state.product = action.payload.data
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
