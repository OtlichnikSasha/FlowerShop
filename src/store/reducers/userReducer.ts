

interface UserState {
    user: object,
    status: boolean,
    error: string,
    loading: boolean
}

const initialState : UserState = {
    user: {},
    status: false,
    error: '',
    loading: false
}


export const userReducer = (state = initialState, action: { type: any }) => {
    switch (action.type){
        case "FETCH_USER" : return {

        }
    }
}
