import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getFlowers, createFlower} from "../../api/FlowersAPI";
import {FlowersState} from "../../types/flowers";

const initialState : FlowersState = {
    flowers: [],
    status: false,
    error: '',
    loading: false
}


export const fetchFlowers = createAsyncThunk(
    'flowers/fetchFlowers',
    async () => {
        console.log('fetchFlowers')
        return await getFlowers();
    }
)


export const fetchCreateFlowers = createAsyncThunk(
    'flowers/fetchCreateFlowers',
    async (data: object) => {
        return await createFlower(data);
    }
)


const flowersSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlowers.pending, state => {
                state.loading = true
            })
            .addCase(fetchFlowers.fulfilled, (state, action) => {
                console.log('flowers', action.payload)
                state.loading = false
                // @ts-ignore
                state.flowers = action.payload.data
                state.status = true
            })
            .addCase(fetchFlowers.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { reducer } = flowersSlice

export default reducer

