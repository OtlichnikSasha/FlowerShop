import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faMinus, faPercent, faPlus, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const SliderProducts: FC = () => {
    const {products, loading} = useTypedSelector(state => state.products)
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class='${className}'>${index+1}</span>`;
        },
    };
    return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={pagination}
                scrollbar={{ draggable: true }}

                >
                    {
                        products.map(product => {
                                return (
                                    <SwiperSlide className="product_card" key={product.id}>
                                        <div className="product_card__photo_place">
                                            <Link to={`/product/${product.id}`} className="product_card__link">
                                                <img
                                                    src={product.photos.length ? product?.photos[0].src : ""}
                                                    alt={product.name}
                                                    className="product_card__photo"
                                                />
                                            </Link>
                                            {product.cellPercent &&
                                                <div className="product_card__cell_place">
                                                    <div className="cell_place_flex">
                                                        <div className="cell_percent_place">
                                                            <FontAwesomeIcon icon={faPercent}/>
                                                        </div>
                                                        <div className="cell_data">
                                                            {product.cellPercent} % скидка
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            <div className="product_card__favorites_place"
                                                 >
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className={product.favorite_products && product.favorite_products.length ? "favorite" : ""}
                                                />
                                            </div>
                                        </div>
                                        <div className="product_card__data_place">
                                            {
                                                product.basket_products && product.basket_products.length ?
                                                    <>
                                                        <div className="product_data__flex">
                                                            <Link to={`/product/${product.id}`}
                                                                  className="product_data__name">
                                                                {product.name}
                                                            </Link>
                                                            <div>
                                                                <div
                                                                    className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                                                    {product.price} ₽
                                                                </div>
                                                                {
                                                                    product.cellPercent &&
                                                                    <div className="product_data__cell_price">
                                                                        {product.cellPrice} ₽
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="product_data_basket_actions">
                                                            <div className="product_data__flex">
                                                                <div className="product_data__action"
                                                                     >
                                                                    <FontAwesomeIcon icon={faMinus}/>
                                                                </div>
                                                                <div className="product_data_in_basket">
                                                                    <span>В корзине: </span>
                                                                    <input className="product_data_basket_input"
                                                                           value={product.basket_products[0].count}/>
                                                                </div>
                                                                <div className="product_data__action"
                                                                     >
                                                                    <FontAwesomeIcon icon={faPlus}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <Link to={`/product/${product.id}`} className="product_data__name">
                                                            {product.name}
                                                        </Link>
                                                        <div className="product_data__flex">
                                                            <div>
                                                                <div
                                                                    className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                                                    {product.price} ₽
                                                                </div>
                                                                {
                                                                    product.cellPercent &&
                                                                    <div className="product_data__cell_price">
                                                                        {product.cellPrice} ₽
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className="product_data__basket_place"
                                                                 >
                                                                <FontAwesomeIcon icon={faShoppingBag}/>
                                                            </div>
                                                        </div>
                                                    </>

                                            }
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
            </Swiper>
    )
}

