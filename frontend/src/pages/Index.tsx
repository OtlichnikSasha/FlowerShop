import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {SliderProducts} from "../components/sliderProducts";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IndividualOrder} from "../components/individualOrder";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import mainImg from '../static/img/main_img.png'
import why_me_order from '../static/img/why_me_order.png'
import why_me_details from '../static/img/why_me_details.png'
import why_me_payment from '../static/img/why_me_payment.png'
import why_me_assembly from '../static/img/why_me_assembly.png'
import why_me_delivery from '../static/img/why_me_delivery.png'
import dots_up from '../static/img/dots_up.png'
import dots_down from '../static/img/dots_down.png'
import {WhyMeItem} from "../components/whyMeItem";

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
                <img src={mainImg} className="main_img" alt="Цветы"/>
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

            {/*Почему мы?*/}
            <div className="heading_block">
                <div className="container">
                    <div className="heading">
                        Почему мы
                    </div>
                    <div className="why_me_place">
                        <WhyMeItem img={why_me_order} heading="Заказ"
                                   subheading="Выберите букет из каталога и оформите заказ"/>
                        <div className="why_me__item">
                            <img src={dots_down} alt="Многоточия"/>
                        </div>
                        <WhyMeItem img={why_me_details} heading="Детали"
                                   subheading="Мы перезвоним в течение 15 минут и уточним детали"/>
                        <div className="why_me__item">
                            <img src={dots_up} alt="Многоточия"/>
                        </div>
                        <WhyMeItem img={why_me_payment} heading="Оплата"
                                   subheading="Оплатите заказ онлайн или при получении"/>
                        <div className="why_me__item">
                            <img src={dots_down} alt="Многоточия"/>
                        </div>
                        <WhyMeItem img={why_me_assembly} heading="Сборка"
                                   subheading="Учтем пожелания и соберем идельный букет"/>
                        <div className="why_me__item">
                            <img src={dots_up} alt="Многоточия"/>
                        </div>
                        <WhyMeItem img={why_me_delivery} heading="Доставка"
                                   subheading="Курьер позвонит за 1 час и привезет вовремя"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

