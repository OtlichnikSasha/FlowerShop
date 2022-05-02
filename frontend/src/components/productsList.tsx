import {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from "react-router-dom";
import {Empty} from "./block/empty";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercent, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

interface ProductsListProps{
    addBasket: any,
    changeFavorite: any,
    firstLoading: boolean
}
export const ProductsList: FC<ProductsListProps> = ({addBasket, changeFavorite, firstLoading}) => {
    const {products, loading} = useTypedSelector(state => state.products)

    return (
        <div className="products_place">
            {
                products.length && !firstLoading ? products.map(product => {
                        return (
                            <div className="product_card" key={product.id}>
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
                                    <div className="product_card__favorites_place" onClick={() => changeFavorite(product)}>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={product.favorite_products && product.favorite_products.length ? "favorite" : ""}
                                        />
                                    </div>
                                </div>
                                <div className="product_card__data_place">
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
                                        {
                                            product.basket_products && product.basket_products.length ?
                                                <div className="product_data__flex">
                                                    <div className="product_data__action">
                                                        -
                                                    </div>
                                                    <input value={product.basket_products[0].count}/>
                                                    <div className="product_data__action">
                                                        -
                                                    </div>
                                                </div>
                                        :
                                                <div className="product_data__basket_place" onClick={() => addBasket(product.id)}>
                                                    <FontAwesomeIcon icon={faShoppingBag}/>
                                                </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <Empty loading={loading} label="Товаров не найдено!"/>
            }
        </div>
    );
};

