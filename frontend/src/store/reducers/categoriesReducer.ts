import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getCategories} from "../../action-creators/CategoriesActionCreators";
import {CategoriesState} from "../../types/categories";

const initialState : CategoriesState = {
    categories: [],
    status: false,
    error: '',
    loading: false
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        return await getCategories();
    }
)


export const createCategory = createAsyncThunk(
    'category/createFetchCategories',
    async () => {
        return getCategories();
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.loading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                console.log('categories', action.payload)
                state.loading = false
                // @ts-ignore
                state.categories = action.payload.data
                state.status = true
            })
            .addCase(fetchCategories.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = categoriesSlice

export default reducer

