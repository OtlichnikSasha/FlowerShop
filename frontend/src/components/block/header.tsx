import React, {useEffect} from 'react';
import {Nav} from "./nav";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAuth} from "../../hooks/auth_hook";

export const Header: React.FC = () => {
    const {fetchCategories, fetchBasket} = useActions()
    const {id} = useAuth()
    useEffect(() => {
        if(!categories.length) fetchCategories()
        console.log('basket', basket, id)
        if(id && !basket.length) fetchBasket({userId: id})
    }, [id])
    const {categories} = useTypedSelector(state => state.categories)
    const {basket} = useTypedSelector(state => state.basket)
    return (
        <header className="header">
            <Nav/>
        </header>
    );
};

