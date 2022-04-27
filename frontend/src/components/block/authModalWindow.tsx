import React, {FC, useState, useCallback, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Notification} from "./notification";

import {useNavigate} from "react-router-dom";

interface PropTypes {
    onClick: () => void,
    page: number,
    setPage: any
}

export const AuthModalWindow: FC<PropTypes> = ({onClick, page, setPage}) => {
    const [regChecker, setRegChecker] = useState(false)
    const [authChecker, setAuthChecker] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [frontendError, setFrontendError] = useState('')
    const [notificationStatus, setNotificationStatus] = useState('')
    const {fetchRegistrationUser, fetchAuthorizationUser, clearUserState} = useActions()
    const {status, loading, error} = useTypedSelector(state => state.user)
    const [registrationState, setRegistrationState] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })
    const [authorizationState, setAuthorizationState] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const changeRegistrationHandler = (event: any) => {
        setRegistrationState({
            ...registrationState,
            [event.target.name]: event.target.value,
        })
    }
    const changeAuthorizationHandler = (event: any) => {
        setAuthorizationState({
            ...authorizationState,
            [event.target.name]: event.target.value,
        })
    }

    const registration = () => {
        console.log('registrationData', registrationState)
        // Сделать проверки
        fetchRegistrationUser(registrationState)
        setRegChecker(true)
    }
    const authorization = () => {
        // Сделать проверки
        fetchAuthorizationUser(authorizationState)
        setAuthChecker(true)
    }

    const registrationTrigger = useCallback(() => {
        if(regChecker && !loading){
            if(status){
                setFrontendError("Вы успешно зарегистрировались")
                setOpenNotification(true)
                setNotificationStatus("success")
                setRegistrationState({
                    email: '',
                    password: '',
                    repeatPassword: ''
                })
                return clearRegistration()
            }
            if(!status && error){
                setFrontendError(error)
                setOpenNotification(true)
                setNotificationStatus("error")
                return clearRegistration()
            }
        }
    }, [regChecker])

    useEffect(() => {
        registrationTrigger()
    }, [registrationTrigger])


    const authorizationTrigger = useCallback(() => {
        if(authChecker && !loading){
            if(status){
                return navigate('/cabinet')
            }
            if(!status && error){
                setFrontendError(error)
                setOpenNotification(true)
                setNotificationStatus("error")
                return clearAuthorization()
            }
        }
    }, [authChecker])

    useEffect(() => {
        authorizationTrigger()
    }, [authorizationTrigger])

    const clearRegistration = () => {
        setTimeout(() => {
            setFrontendError("")
            setOpenNotification(false)
            setNotificationStatus("")
            setRegChecker(false)
            clearUserState()
        }, 3000)
    }

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
        <div className="modal_window_place">
            <Notification openNotification={openNotification} frontendError={frontendError}
                          status={notificationStatus}/>
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={onClick}>
                        <FontAwesomeIcon icon={faTimes} />
                        <span>Закрыть</span>
                    </div>
                </div>
                <div className="modal_window_data_place">
                    {
                        page === 1 ?
                            <div className="registration_place">
                                <div className="modal_window_heading">
                                    Регистрация
                                </div>
                                <div className="default_label">
                                    Введите Email
                                </div>
                                <input className="default_input"
                                       placeholder="Введите Email"
                                       name="email"
                                       onChange={changeRegistrationHandler}
                                       value={registrationState.email}
                                />
                                <div className="default_label">
                                    Придумайте пароль
                                </div>
                                <input className="default_input"
                                       type="password"
                                       placeholder="Придумайте пароль"
                                       name="password"
                                       onChange={changeRegistrationHandler}
                                       value={registrationState.password}
                                />
                                <div className="default_label">
                                    Повторите пароль
                                </div>
                                <input className="default_input"
                                       type="password"
                                       placeholder="Повторите пароль"
                                       name="repeatPassword"
                                       onChange={changeRegistrationHandler}
                                       value={registrationState.repeatPassword}
                                />
                                <div className="default_btn" onClick={registration}>
                                    Зарегистрироваться
                                </div>
                                <div className="offer_to_go">
                                    Уже есть аккаунт? <span onClick={() => setPage(2)}>Авторизоваться</span>
                                </div>
                            </div>
                            :
                            <div className="auth_place">
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
                    }
                </div>
            </div>
        </div>
    );
};

