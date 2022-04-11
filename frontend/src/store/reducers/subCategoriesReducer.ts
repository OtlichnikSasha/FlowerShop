import {SubCategoriesState} from "../../types/subCategories";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSubCategories, createSubCategory} from "../../action-creators/SubCategoriesActionCreators";

const initialState : SubCategoriesState = {
    subCategories: [],
    status: false,
    error: '',
    loading: false
}


export const fetchSubCategories = createAsyncThunk(
    'subCategories/fetchSubCategories',
    async (args: object) => {
        console.log('fetchSubCategories', args)
        return await getSubCategories(args);
    }
)


export const fetchCreateSubCategory = createAsyncThunk(
    'subCategories/fetchCreateSubCategory',
    async (data: object) => {
        return await createSubCategory(data);
    }
)


const subCategoriesSlice = createSlice({
    name: 'subCategories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubCategories.pending, state => {
                state.loading = true
            })
            .addCase(fetchSubCategories.fulfilled, (state, action) => {
                console.log('subCategories', action.payload)
                state.loading = false
                // @ts-ignore
                state.subCategories = action.payload.data
                state.status = true
            })
            .addCase(fetchSubCategories.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = subCategoriesSlice

export default reducer

