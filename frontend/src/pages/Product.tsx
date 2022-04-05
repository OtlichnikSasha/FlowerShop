import React from 'react';
import {Link} from "react-router-dom";

export const Product: React.FC = () => {
    return (
        <section className="container">
            <div className="breadcrumbs_place">
                <Link to="/index">Главная</Link> / <Link to="#">Каталог</Link>
            </div>
            <div className="product_place">
                <div className="product_photos_place">

                </div>
                <div className="product_data_center">

                </div>
                <div className="product_data_right">

                </div>
            </div>
        </section>
    );
};

