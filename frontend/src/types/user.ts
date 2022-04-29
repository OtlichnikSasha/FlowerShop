export interface UserState {
    user: UserEntity | null,
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

export interface UserEntity {
    id: number,
    email: string,
    name: string | null,
    surname: string | null,
    addresses: [],
    phone: string,
    birthday: string,
    bonus_count: number
}

export interface LoginUserState {
    userId: number,
    token: string,
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export interface RegistrationUserData {
    email: string,
    password: string,
    repeatPassword: string
}

export interface AuthorizationUserData {
    email: string,
    password: string,
}