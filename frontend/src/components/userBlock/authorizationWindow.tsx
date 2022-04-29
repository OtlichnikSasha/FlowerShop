import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {Notification} from "../block/notification";
interface AuthorizationProps{
    setPage: React.ComponentState
}
export const AuthorizationWindow: FC<AuthorizationProps> = ({setPage}) => {
    const {fetchAuthorizationUser, clearUserState} = useActions()
    const [authChecker, setAuthChecker] = useState(false)
    const {status, error, loading, token, userId} = useTypedSelector(state => state.userLogin)
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [openNotification, setOpenNotification] = useState(false)
    const [frontendError, setFrontendError] = useState('')
    const [notificationStatus, setNotificationStatus] = useState('')
    const [authorizationState, setAuthorizationState] = useState({
        email: 'varlamov.sanya83@mail.ru',
        password: 'Kuricatv230285',
    })
    const changeAuthorizationHandler = (event: any) => {
        setAuthorizationState({
            ...authorizationState,
            [event.target.name]: event.target.value,
        })
    }
    const authorization = () => {
        // Сделать проверки
        fetchAuthorizationUser(authorizationState)
        setAuthChecker(true)
    }
    const authorizationTrigger = useCallback(() => {
        console.log(authChecker, loading, status, token, userId)
        if(authChecker && !loading){
            if(status){
                auth.login(token, userId)
                return navigate('/cabinet')
            }
            if(!status && error){
                setFrontendError(error)
                setOpenNotification(true)
                setNotificationStatus("error")
                return clearAuthorization()
            }
        }
    }, [authChecker, loading])

    useEffect(() => {
        authorizationTrigger()
    }, [authorizationTrigger])
    const clearAuthorization = () => {
        setTimeout(() => {
            setFrontendError("")
            setOpenNotification(false)
            setNotificationStatus("")
            setAuthChecker(false)
            clearUserState()
        }, 3000)
    }
    return (
        <div className="auth_place">
            <Notification openNotification={openNotification} frontendError={frontendError}
                          status={notificationStatus}/>
            <div className="modal_window_heading">
                Авторизация
            </div>
            <div className="default_label">
                Введите Email
            </div>
            <input className="default_input"
                   placeholder="Введите Email"
                   name="email"
                   onChange={changeAuthorizationHandler}
                   value={authorizationState.email}
            />
            <div className="default_label">
                Введите пароль
            </div>
            <input className="default_input"
                   type="password"
                   placeholder="Введите пароль"
                   name="password"
                   onChange={changeAuthorizationHandler}
                   value={authorizationState.password}
            />
            <div className="default_btn" onClick={authorization}>
                Авторизоваться
            </div>
            <div className="offer_to_go">
                Ещё нет аккаунта? <span onClick={() => setPage(1)}>Зарегистрироваться</span>
            </div>
        </div>
    );
};

