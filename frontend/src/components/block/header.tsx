import React, {useEffect} from 'react';
import {Nav} from "./nav";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAuth} from "../../hooks/auth_hook";

export const Header: React.FC = () => {
    const {fetchCategories, fetchBasket, fetchFavoritesProducts} = useActions()
    const {id} = useAuth()
    useEffect(() => {
        if(!categories.length) fetchCategories()
        if(id && !basket.length) fetchBasket({userId: id})
        if(id && !products.length) fetchFavoritesProducts({userId: id})
    }, [id])
    const {categories} = useTypedSelector(state => state.categories)
    const {basket} = useTypedSelector(state => state.basket)
    const {products} = useTypedSelector(state => state.favorite)
    return (
        <header className="header">
            <Nav/>
        </header>
    );
};

