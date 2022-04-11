import React, {useEffect} from 'react';
import {Nav} from "./nav";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Header: React.FC = () => {
    const {fetchCategories} = useActions()
    useEffect(() => {
        if(!categories.length) fetchCategories()
    }, [])
    const {categories} = useTypedSelector(state => state.categories)
    return (
        <header className="header">
            <Nav/>
        </header>
    );
};

