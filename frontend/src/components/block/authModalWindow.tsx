import React, {FC, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface PropTypes {
    onClick: () => void,
    page: number
}

export const AuthModalWindow: FC<PropTypes> = ({onClick, page}) => {
    // const {fet} = useActions()
    // const {flowers} = useTypedSelector(state => state.user)
    const [registrationState, setRegistrationState] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })
    const [authorizationState, setAuthorizationState] = useState({
        email: '',
        password: '',
    })
    const changeRegistrationHandler = (event: any) => {
        setRegistrationState({
            ...registrationState,
            [event.target.name]: !isNaN(event.target.value) ? Number(event.target.value) : event.target.value,
        })
    }
    const changeAuthorizationHandler = (event: any) => {
        setAuthorizationState({
            ...authorizationState,
            [event.target.name]: !isNaN(event.target.value) ? Number(event.target.value) : event.target.value,
        })
    }

    const registration = () => {

    }
    const authorization = () => {

    }
    return (
        <div className="modal_window_place">
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={onClick}>
                        <span className="fa fa-times">

                        </span>
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
                            </div>
                            :
                            <div className="auth_place">
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
                                    Зарегистрироваться
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

