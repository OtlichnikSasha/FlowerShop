import {
    UserState,
} from "../../types/user";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {registration, authorization, getUser} from "../../api";
import {AuthorizationUserData, RegistrationUserData} from "../../types/user";

const initialState : UserState = {
    user: null,
    status: false,
    error: '',
    loading: false
}

// export const fetchUser = createAsyncThunk(
//     'user/fetchUser',
//     async (args: object) => {
//         console.log('fetchSubCategories', args)
//         return await getSubCategories(args);
//     }
// )


export const fetchRegistrationUser = createAsyncThunk(
    'user/fetchRegistrationUser',
    async (data: RegistrationUserData) => {
        return await registration(data);
    }
)


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (args: object) => {
        return await getUser(args);
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserState: state => {
            state.loading = false
            state.user = null
            state.status = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegistrationUser.pending, state => {
                state.loading = true
            })
            .addCase(fetchRegistrationUser.fulfilled, (state: UserState, action) => {
                console.log('user', action.payload)
                state.loading = false
                //@ts-ignore
                state.user = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchRegistrationUser.rejected, state => {
                state.loading = false
            })

            .addCase(fetchUser.pending, state => {
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state: UserState, action) => {
                console.log('user', action.payload)
                state.loading = false
                //@ts-ignore
                state.user = action.payload.data
                state.status = action.payload.status
            })
            .addCase(fetchUser.rejected, state => {
                state.loading = false
            })


            .addDefaultCase(() => {
            })
    }
})

const { actions, reducer} = userSlice
export const {
    clearUserState
} = actions
export default reducer


