import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Empty} from "./block/empty";
import {useAuth} from "../hooks/auth_hook";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {ProductState} from "../types/products";

export const BasketProductsList: FC = () => {
    const {id} = useAuth()
    const {basket, loading, orderPrice} = useTypedSelector(state => state.basket)
    const {
        fetchAddBasket, fetchRemoveBasket, fetchAddFavorite, fetchRemoveFavorite, fetchBasket
    } = useActions()
    const changeBasket = async (productId: number, count: number) => {
        if (!count) {
            await fetchRemoveBasket({userId: id, productId})
        } else {
            await fetchAddBasket({userId: id, productId, count: count})
        }
        await fetchBasket({userId: id})
    }

    const changeFavorite = async (product: ProductState) => {
        product.favorite_products && product.favorite_products.length ?
            await fetchRemoveFavorite({productId: product.id, userId: id}) :
            await fetchAddFavorite({productId: product.id, userId: id})
    }
    return (
        <div className="basket_products_place">
            {
                basket && basket.length ? basket.map(product => {
                        return (
                            <div className="basket_product_card">
                                <Link className="basket_product_card__photo_place" to={`/product/${product.product.id}`}>
                                    <img
                                        src={product.product.photos && product.product.photos.length ? product.product.photos[0].src : ''}
                                        alt={product.product.name}/>
                                </Link>
                                <div className="basket_product_card__data">
                                    <Link to={`/product/${product.product.id}`} className="product_data__name">
                                        {product.product.name}
                                    </Link>
                                    <div
                                        className={product.product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                        {product.product.price} ₽
                                    </div>
                                    {
                                        product.product.cellPercent &&
                                        <div className="product_data__cell_price">
                                            {product.product.cellPrice} ₽
                                        </div>
                                    }
                                    <div className="product_data__flex">
                                        <div className="product_data__action"
                                             onClick={() => changeBasket(product.product.id, product.product.basket_products[0].count - 1)}>
                                            <FontAwesomeIcon icon={faMinus}/>
                                        </div>
                                        <div className="product_data_in_basket">
                                            <span>В корзине: </span>
                                            <input className="product_data_basket_input"
                                                   value={product.product.basket_products && product.product.basket_products.length && product.product.basket_products[0].count}/>
                                        </div>
                                        <div className="product_data__action"
                                             onClick={() => changeBasket(product.product.id, product.product.basket_products[0].count + 1)}>
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </div>
                                    </div>
                                    <div className="basket_product_card__remove" onClick={() => changeBasket(product.product.id, 0)}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    :
                    <Empty loading={loading} label="Ваша корзина пуста"/>
            }
            <Link to="/order" className="basket_product_card__order_btn_place">
                <span>ПЕРЕЙТИ К ОФОРМЛЕНИЮ ЗАКАЗА</span>
                <div className="basket_product_card__final_price">
                    {orderPrice} ₽
                </div>
            </Link>
        </div>
    );
};

