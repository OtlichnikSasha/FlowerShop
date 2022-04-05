export interface UserState {
    user: object,
    status: boolean | null,
    error: string | null,
    loading: boolean
    // user: {
    //     id: number,
    //     email: string,
    //     name: string | null,
    //     surname: string | null,
    //     addresses: [object],
    //     phone: string // может быть, будешь число хранить
    //     birthday: string,
    //     bonus_count: number
    // }
}

export enum ActionUserTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}

export interface FetchUserAction {
    type: ActionUserTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
    type: ActionUserTypes.FETCH_USER_SUCCESS
    payload: object
}

export interface FetchUserErrorAction {
    type: ActionUserTypes.FETCH_USER_ERROR
    payload: string
}

export type UserActionTypes = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction