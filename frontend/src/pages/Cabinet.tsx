import React, {FC, useCallback, useEffect, useState} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/auth_hook";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {PersonalCabinet} from "../components/userBlock/personalCabinet";
import {AddressesCabinet} from "../components/userBlock/addressesCabinet";
import {HistoryCabinet} from "../components/userBlock/historyCabinet";

export const Cabinet: FC = () => {
    const {id} = useAuth()
    const {fetchUser} = useActions()
    const {loading} = useTypedSelector(state => state.user)
    const getUser = useCallback(() => {
        if (id) fetchUser({id})
    }, [id])
    useEffect(() => {
        getUser()
        document.title = "Личный кабинет"
    }, [getUser])
    const [navigation, setNavigation] = useState<number>(1)

    if (loading) return <div>Идёт загрузка</div>
    return (
        <>
            <div className="heading_block">
                <div className="container">
                    <Breadcrumbs>
                        <Link to="/cabinet" className="breadcrumbs_link">личный кабинет</Link>
                    </Breadcrumbs>
                    <h1 className="heading">
                        Личный кабинет
                    </h1>
                    <div className="subheading">
                        В личном кабинете вы можете проверить ход выполнения ваших заказов, просмотреть или изменить
                        личную информацию.
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="cabinet_navigation_place">
                    <div
                        className={navigation === 1 ? "cabinet_navigation_item _active" : "cabinet_navigation_item"}
                        onClick={() => setNavigation(1)}
                    >
                        личная информация
                    </div>
                    <div
                        className={navigation === 2 ? "cabinet_navigation_item _active" : "cabinet_navigation_item"}
                        onClick={() => setNavigation(2)}
                    >
                        адреса
                    </div>
                    <div
                        className={navigation === 3 ? "cabinet_navigation_item _active" : "cabinet_navigation_item"}
                        onClick={() => setNavigation(3)}
                    >
                        история заказов
                    </div>
                </div>
                { navigation === 1 ? <PersonalCabinet/> : <></> }
                { navigation === 2 ? <AddressesCabinet/> : <></> }
                { navigation === 3 ? <HistoryCabinet/> : <></> }
            </section>
        </>
    );
};

