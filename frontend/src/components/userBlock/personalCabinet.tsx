import React, {FC, useCallback, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UserEntity} from "../../types/user";

export const PersonalCabinet: FC = () => {
    const {user} = useTypedSelector(state => state.user)
    const [userData, setUserData] = useState<UserEntity>({
        id: 0,
        addresses: [],
        birthday: '',
        bonus_count: 0,
        email: '',
        name: null,
        phone: '',
        surname: null
    })
    const changeUserData = useCallback(() => {
        if (user) {
            setUserData({
                ...userData,
                id: user.id,
                addresses: user.addresses,
                birthday: user.birthday,
                bonus_count: user.bonus_count,
                email: user.email,
                name: user.name,
                phone: user.phone,
                surname: user.surname

            })
        }
    }, [user])

    useEffect(() => {
        changeUserData()
    }, [changeUserData])
    return (
        <div className="cabinet_personal_data_place">
            <h2 className="heading">
                Личные данные
            </h2>
            <input className="default_input" placeholder="Введите имя"
                   value={userData.name ? userData.name : ''}/>
            <input className="default_input" placeholder="Введите фамилию"
                   value={userData.surname ? userData.surname : ''}/>
            <input className="default_input" placeholder="Введите номер телефона"
                   value={userData.phone}/>
            <input className="default_input" placeholder="Введите Email" value={userData.email}/>
            <input className="default_input" placeholder="Введите дату рождения"
                   value={userData.birthday}/>
            <div className="default_btn">
                Сохранить изменения
            </div>
        </div>
    );
};

