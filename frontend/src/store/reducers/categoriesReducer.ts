import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getCategories, createCategory} from "../../api/index";
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


export const fetchCreateCategory = createAsyncThunk(
    'categories/FetchCreateCategory',
    async (data: object) => {
        console.log('data', data)
        return await createCategory(data);
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
                state.status = action.payload.status
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

