import {useState, useCallback, useEffect} from 'react'
const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState('')
    const [id, setId] = useState(0)
    const login = useCallback((jwtToken: string, userId: number) => {
        setToken(jwtToken)
        setId(userId)
        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken, id: userId
        }))
    }, [])

    const logout = useCallback(() => {
        setToken('')
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        // @ts-ignore
        const data: any = JSON.parse(localStorage.getItem(storageName))
        console.log('data', data)
        if (data && data.token) {
            login(data.token, data.id)
        }
    }, [login])

    return {login, logout, token, id}
}