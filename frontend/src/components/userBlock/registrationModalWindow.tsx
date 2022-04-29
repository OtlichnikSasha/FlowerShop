import React, {FC, useCallback, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Notification} from "../block/notification";
interface RegistrationProps{
    setPage: React.ComponentState
}
export const RegistrationModalWindow: FC<RegistrationProps> = ({setPage}) => {
    const {fetchRegistrationUser, clearUserState} = useActions()
    const [regChecker, setRegChecker] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [frontendError, setFrontendError] = useState('')
    const [notificationStatus, setNotificationStatus] = useState('')
    const {status, loading, error} = useTypedSelector(state => state.user)
    const [registrationState, setRegistrationState] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })
    const changeRegistrationHandler = (event: any) => {
        setRegistrationState({
            ...registrationState,
            [event.target.name]: event.target.value,
        })
    }
    const registration = () => {
        console.log('registrationData', registrationState)
        // Сделать проверки
        fetchRegistrationUser(registrationState)
        setRegChecker(true)
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

    const clearRegistration = () => {
        setTimeout(() => {
            setFrontendError("")
            setOpenNotification(false)
            setNotificationStatus("")
            setRegChecker(false)
            clearUserState()
        }, 3000)
    }
    return (
            <div className="registration_place">
                <Notification openNotification={openNotification} frontendError={frontendError}
                              status={notificationStatus}/>
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
    );
};