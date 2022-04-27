import {useState, useCallback, useEffect} from 'react'
const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState('')
    const [id, setId] = useState(0)
    const login = useCallback((jwtToken: string, id: number) => {
        setToken(jwtToken)
        setId(id)
        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken, id
        }))
    }, [])

    const logout = useCallback(() => {
        setToken('')
        setId(0)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        // @ts-ignore
        const data: any = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.username)
        }
    }, [login])

    return {login, logout, token, id}
}