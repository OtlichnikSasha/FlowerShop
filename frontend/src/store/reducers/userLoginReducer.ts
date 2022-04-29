import {
    LoginUserState,
} from "../../types/user";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authorization} from "../../api";
import {AuthorizationUserData} from "../../types/user";

const initialState : LoginUserState = {
    userId: 0,
    status: false,
    error: '',
    loading: false,
    token: ''
}


export const fetchAuthorizationUser = createAsyncThunk(
    'loginUserSlice/fetchAuthorizationUser',
    async (data: AuthorizationUserData) => {
        return await authorization(data);
    }
)


const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        clearLoginUserState: state => {
            state.loading = false
            state.userId = 0
            state.status = null
            state.error = null
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthorizationUser.pending, state => {
                state.loading = true
            })
            .addCase(fetchAuthorizationUser.fulfilled, (state: LoginUserState, action) => {
                console.log('user', action.payload)
                state.loading = false
                //@ts-ignore
                state.userId = action.payload.data.userId
                state.status = action.payload.status
                //@ts-ignore
                state.token = action.payload.data.token
            })
            .addCase(fetchAuthorizationUser.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { actions, reducer} = loginUserSlice
export const {
    clearLoginUserState
} = actions
export default reducer


