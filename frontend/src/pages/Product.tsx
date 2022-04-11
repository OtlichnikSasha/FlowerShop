import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
interface ProductParams {
    id: string
}
export const Product: React.FC = () => {
    const {id}:ProductParams = useParams()
    const {product, loading} = useTypedSelector(state => state.product)
    const {fetchProduct} = useActions();
    useEffect(() => {
        fetchProduct({id})
    }, [id])

    if(loading){
        return (
            <div>
                Загрузка
            </div>
        )
    }

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

