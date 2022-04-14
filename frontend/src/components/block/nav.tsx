import React, {useState, FC} from 'react';
import {NavLink} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {BasketModalWindow} from "./basketModalWindow";
import {AuthModalWindow} from "./authModalWindow";

export const Nav: FC = () => {
    const {categories} = useTypedSelector(state => state.categories)
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
    return (
        <div className="block_container">
            {visibleBasket && <BasketModalWindow onClick={closeBasket}/>}
            {visibleAuth && <AuthModalWindow onClick={closeAuthModal}/>}
            <nav className="nav">
                <div className="nav_item">
                    <NavLink to="/catalog" className="nav_link">
                        Каталог
                    </NavLink>
                    <div className="categories_list_place">
                        {categories.length && categories.map(category => {
                            return (
                                <div className="nav_item"  key={category.id}>
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
                            <span className="fas fa-heart">

                            </span>
                    </div>
                </NavLink>
                <div className="right_nav__item" onClick={openBasket}>
                    <div className="right_nav__item icon">
                            <span className="fas fa-shopping-bag">

                            </span>
                    </div>
                </div>
                <div className="right_nav__item" onClick={openAuthModal}>
                    <div className="right_nav__item icon">
                            <span className="fas fa-user">

                            </span>
                    </div>
                </div>
            </div>
        </div>

    );
};

