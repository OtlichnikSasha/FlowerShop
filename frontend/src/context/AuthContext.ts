import {createContext} from 'react'

function noop(token: string, id: number) {
}
function logoutNoop() {
}

export const AuthContext = createContext({
    token: '',
    id: 0,
    login: noop,
    logout: logoutNoop,
    isAuthenticated: false
})