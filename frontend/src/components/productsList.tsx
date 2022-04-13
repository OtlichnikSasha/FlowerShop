import {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from "react-router-dom";

export const ProductsList: FC = (P) => {
    const {products, loading} = useTypedSelector(state => state.products)
    return (
        <div className="products_place">
            {products.length && !loading && products.map(product => {
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
                                            <span className="fa fa-percent">

                                            </span>
                                        </div>
                                        <div className="cell_data">
                                            {product.cellPercent} % скидка
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="product_card__favorites_place">
                                <span className="fas fa-heart">

                                </span>
                            </div>
                        </div>
                        <div className="product_card__data_place">
                            <div className="product_data__name">
                                {product.name}
                            </div>
                            <div className="product_data__flex">
                                <div>
                                    <div className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                        {product.price} ₽
                                    </div>
                                    {
                                        product.cellPercent &&
                                        <div className="product_data__cell_price">
                                            {product.cellPrice} ₽
                                        </div>
                                    }
                                </div>
                                <div className="product_data__basket_place">
                                    <span className="fas fa-shopping-bag">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

