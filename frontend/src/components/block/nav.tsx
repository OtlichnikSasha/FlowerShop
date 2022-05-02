import React, {useState, FC, useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {BasketModalWindow} from "./basketModalWindow";
import {UserModalWindow} from "./userModalWindow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingBag, faUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import {useAuth} from "../../hooks/auth_hook";
import {AuthContext} from "../../context/AuthContext";

export const Nav: FC = () => {
    const {token} = useAuth()
    const isAuthenticated = !!token
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {categories} = useTypedSelector(state => state.categories)
    const {basket} = useTypedSelector(state => state.basket)
    console.log('basket', basket)
    const [visibleBasket, setVisibleBasket] = useState(false)
    const [visibleAuth, setVisibleAuth] = useState(false)
    const openBasket = () => {
        setVisibleBasket(true)
        document.body.style.overflow = "hidden";
    }
    const closeBasket = () => {
        setVisibleBasket(false)
        document.body.style.overflow = "auto";
    }

    const openAuthModal = () => {
        setVisibleAuth(true)
        document.body.style.overflow = "hidden";
    }
    const closeAuthModal = () => {
        setVisibleAuth(false)
        document.body.style.overflow = "auto";
    }

    const logoutUser = () => {
        auth.logout()
        navigate("/index")
    }
    return (
        <div className="block_container">
            {visibleBasket && <BasketModalWindow onClick={closeBasket}/>}
            {visibleAuth && <UserModalWindow onClick={closeAuthModal}/>}
            <nav className="nav">
                <div className="nav_item">
                    <NavLink to="/catalog" className="nav_link">
                        Каталог
                    </NavLink>
                    <div className="categories_list_place">
                        {categories.length && categories.map(category => {
                            return (
                                <div className="nav_item" key={category.id}>
                                    <NavLink to={`/catalog/${category.id}/all`} className="nav_link">
                                        {category.name}
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="nav_item">
                    <NavLink to="/delivery_and_payment" className="nav_link">
                        Доставка и оплата
                    </NavLink>
                </div>
                <div className="nav_item">
                    <NavLink to="/catalog" className="nav_link">
                        Блог
                    </NavLink>
                </div>
            </nav>
            <div className="logo_place">
                <NavLink to='/index' className='logo'>
                    Весёлый одуван
                </NavLink>
                <div className="sub_logo">
                    доставка букетов
                </div>
            </div>
            <div className="right_nav">
                <NavLink to="/favorites" className="right_nav__item">
                    <div className="right_nav__item icon">
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </NavLink>
                <div className="right_nav__item" onClick={openBasket}>
                    <div className="right_nav__item icon">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                    </div>
                    {
                        basket.products && basket.products.length ?
                            <span className="data_total">
                                            {basket.products.length}
                            </span>
                            : <></>
                    }
                </div>
                {
                    isAuthenticated ?
                        <>
                            <NavLink to="/cabinet" className="right_nav__item">
                                <div className="right_nav__item icon">
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>

                            </NavLink>
                            <div className="right_nav__item" onClick={logoutUser}>
                                <div className="right_nav__item icon">
                                    <FontAwesomeIcon icon={faSignOut}/>
                                </div>
                            </div>
                        </>
                        :
                        <div className="right_nav__item" onClick={openAuthModal}>
                            <div className="right_nav__item icon">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                        </div>
                }
            </div>
        </div>

    );
};

