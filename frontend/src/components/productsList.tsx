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
                                <img src={''} alt={product.name}/>
                            </Link>
                        </div>
                        <div className="product_card__data_place">
                            <div className="product_data__name">
                                {product.name}
                            </div>
                            <div className="product_data__flex">
                                <>
                                    <div className="product_data__price">
                                        {product.price} ₽
                                    </div>
                                    <div className="product_data__cell_price">
                                        {product.price} ₽
                                    </div>
                                </>
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

