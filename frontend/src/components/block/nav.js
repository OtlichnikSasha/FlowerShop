import React from 'react';
import {NavLink} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Nav = () => {
    const {categories} = useTypedSelector(state => state.categories)
    return (
        <div className="block_container">
            <nav className="nav">
                <div className="nav_item">
                    <NavLink to="/catalog" className="nav_link">
                        Каталог
                    </NavLink>
                    <div className="categories_list_place">
                        {categories.length && categories.map(category => {
                            return (
                                <NavLink to={`/catalog/${category.id}/all`} className="nav_link" key={category.id}>
                                    {category.name}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                <div className="nav_item">
                    <NavLink to="/catalog" className="nav_link">
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

