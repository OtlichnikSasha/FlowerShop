import React from 'react';
import {NavLink} from 'react-router-dom'
export const Nav = () => {
    return (
        <div className="block_container">
            <nav className="nav">
                <NavLink to="/catalog" className="nav_link">
                    Каталог
                </NavLink>
                <NavLink to="/catalog" className="nav_link">
                    Доставка и оплата
                </NavLink>
                <NavLink to="/catalog" className="nav_link">
                    Блог
                </NavLink>
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
                <NavLink to="/favorites" className="right_nav__item">
                    <div className="right_nav__item icon">
                            <span className="fas fa-shopping-bag">

                            </span>
                    </div>
                </NavLink>
                <NavLink to="/favorites" className="right_nav__item">
                    <div className="right_nav__item icon">
                            <span className="fas fa-user">

                            </span>
                    </div>
                </NavLink>
            </div>
        </div>

    );
};

