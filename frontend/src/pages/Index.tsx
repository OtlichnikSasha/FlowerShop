import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {SliderProducts} from "../components/sliderProducts";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IndividualOrder} from "../components/individualOrder";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import mainImg from '../static/img/main_img.png'

export const Index: React.FC = () => {
    useEffect(() => {
        document.title = "Главная";
        if (!products.length) fetchPopularProducts()
        if (!cellProducts.length) fetchCellProducts()
    }, [])
    const {fetchPopularProducts, fetchCellProducts} = useActions()
    const {products} = useTypedSelector(state => state.popularProducts)
    const cellProducts = useTypedSelector(state => state.cellProducts).products

    return (
        <div>
            <div className="main_img_place">
                <img src={mainImg} className="main_img"/>
                <div className="main_img__background">
                    <div className="main_img__text_place">
                        <div className="heading">
                            ДОСТАВКА БУКЕТОВ в Воронеже
                        </div>
                        <div className="subheading">
                            Закажи свой идеальный букет
                        </div>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </div>
            </div>
            <section className="slider_products_place">
                <div className="container">
                    <div className="slider_products_flex">
                        <div className="heading">Популярное</div>
                        <Link to="/catalog" className="default_btn">
                            Весь каталог
                        </Link>
                    </div>
                    <SliderProducts products={products}/>
                </div>
            </section>
            <IndividualOrder/>
            <section className="slider_products_place">
                <div className="container">
                    <div className="slider_products_flex">
                        <div className="heading">Скидки</div>
                        <Link to="/catalog" className="default_btn">
                            Весь каталог
                        </Link>
                    </div>
                    <SliderProducts products={cellProducts}/>
                </div>
            </section>
        </div>
    );
};

