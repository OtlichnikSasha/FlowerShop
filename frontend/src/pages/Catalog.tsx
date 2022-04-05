import React, {useEffect} from 'react';
import {Sorting} from "../components/sorting";
import {Link} from 'react-router-dom'

export const Catalog: React.FC = () => {


    useEffect(() => {
        
        // Тут будем получать категории, подкатегории и товары
    }, [])


    return (
        <section className="container">
            <div className="breadcrumbs_place">
                <Link to="/index">Главная</Link> / <Link to="#">Каталог</Link>
            </div>
            <div className="catalog_place">
                <Sorting/>
                <div className="catalog_products_place">

                </div>
            </div>
        </section>
    );
};

