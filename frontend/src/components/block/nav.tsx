import React, {useState, FC, useContext, useRef} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {BasketModalWindow} from "./basketModalWindow";
import {UserModalWindow} from "./userModalWindow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingBag, faUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import {useAuth} from "../../hooks/auth_hook";
import {AuthContext} from "../../context/AuthContext";
import {MobileNav} from "../mobileNav";

export const Nav: FC = () => {
    const {token} = useAuth()
    const isAuthenticated = !!token
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {categories} = useTypedSelector(state => state.categories)
    const {basket} = useTypedSelector(state => state.basket)
    const {products} = useTypedSelector(state => state.favorite)
    const [visibleBasket, setVisibleBasket] = useState(false)
    const [visibleAuth, setVisibleAuth] = useState(false)
    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false)

    const mobileNav = useRef(null)
    const openBasket = () => {
        setVisibleBasket(true)
        document.body.style.overflow = "hidden";
    }

    const openAuthModal = () => {
        setVisibleAuth(true)
        document.body.style.overflow = "hidden";
    }

    const logoutUser = () => {
        auth.logout()
        navigate("/index")
    }

    const openMobileNav = () => {
        setVisibleMobileMenu(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className="block_container">
            {visibleBasket && <BasketModalWindow setVisible={setVisibleBasket}/>}
            {visibleAuth && <UserModalWindow setVisible={setVisibleAuth}/>}
            {visibleMobileMenu && <MobileNav setVisible={setVisibleMobileMenu} />}
            <nav className="nav" ref={mobileNav}>
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
            <div className="mobile_menu_place" onClick={openMobileNav}>
                <span/>
                <span/>
                <span/>
            </div>
        </div>

    );
};

