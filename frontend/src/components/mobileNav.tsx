import React, {FC, useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingBag, faSignOut, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../hooks/auth_hook";
import {AuthContext} from "../context/AuthContext";
import {NavLink, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {BasketModalWindow} from "./block/basketModalWindow";
import {UserModalWindow} from "./block/userModalWindow";
interface MobileNavProps{
    setVisible: React.ComponentState
}
export const MobileNav: FC<MobileNavProps> = ({setVisible}) => {
    const {token} = useAuth()
    const isAuthenticated = !!token
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {categories} = useTypedSelector(state => state.categories)
    const {basket} = useTypedSelector(state => state.basket)
    const {products} = useTypedSelector(state => state.favorite)
    const [visibleBasket, setVisibleBasket] = useState(false)
    const [visibleAuth, setVisibleAuth] = useState(false)
    const closeMenu = () => {
        setVisible(false)
        document.body.style.overflow = "auto";
    }
    const openBasket = () => {
        setVisibleBasket(true)
        document.body.style.overflow = "hidden";
    }

    const openAuthModal = () => {
        setVisibleAuth(true)
        document.body.style.overflow = "hidden";
        setVisible(false)
    }

    const logoutUser = () => {
        auth.logout()
        navigate("/index")
    }
    return (
        <div className="modal_window_place">
            {visibleBasket && <BasketModalWindow setVisible={setVisibleBasket}/>}
            {visibleAuth && <UserModalWindow setVisible={setVisibleAuth}/>}
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faTimes}/>
                        <span>Закрыть</span>
                    </div>
                </div>
                <div className="modal_window_data_place">
                    <nav className="mobile_nav">
                        <div className="nav_item">
                            <NavLink to="/catalog" className="nav_link">
                                Каталог
                            </NavLink>
                        </div>
                        <div className="nav_item">
                            <NavLink to="/blog" className="nav_link">
                                Блог
                            </NavLink>
                        </div>
                        <div className="nav_item">
                            <NavLink to="/delivery_and_payment" className="nav_link">
                                Доставка
                            </NavLink>
                        </div>
                        <div className="nav_item">
                            <NavLink to="/catalog" className="nav_link">
                                Оплата
                            </NavLink>
                        </div>
                    </nav>
                    <div className="mobile_bottom_nav">
                        <div className="right_nav__item_place">
                            <NavLink to="/favorites" className="right_nav__item">
                                <div className="right_nav__item icon">
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                {
                                    products && products.length ?
                                        <span className="data_total">
                                            {products.length}
                            </span>
                                        :
                                        <></>
                                }
                            </NavLink>
                        </div>
                        <div className="right_nav__item_place">
                            <div className="right_nav__item" onClick={openBasket}>
                                <div className="right_nav__item icon">
                                    <FontAwesomeIcon icon={faShoppingBag}/>
                                </div>
                                {
                                    basket && basket.length ?
                                        <span className="data_total">
                                            {basket.length}
                                        </span>
                                        : <></>
                                }
                            </div>
                        </div>
                        {
                            isAuthenticated ?
                                <>
                                    <div className="right_nav__item_place">
                                        <NavLink to="/cabinet" className="right_nav__item">
                                            <div className="right_nav__item icon">
                                                <FontAwesomeIcon icon={faUser}/>
                                            </div>

                                        </NavLink>
                                    </div>
                                    <div className="right_nav__item_place">
                                        <div className="right_nav__item" onClick={logoutUser}>
                                            <div className="right_nav__item icon">
                                                <FontAwesomeIcon icon={faSignOut}/>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="right_nav__item_place">
                                    <div className="right_nav__item" onClick={openAuthModal}>
                                        <div className="right_nav__item icon">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

