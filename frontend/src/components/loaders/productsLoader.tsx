import React, {FC, useState} from 'react';


export const ProductsLoader: FC = () => {
    // const products = useState([
    //     {}, {}, {}, {}, {}, {}, {}
    // ])
    // // @ts-ignore
    return (
        // {products.length ? products.map((product: any, i: number) => {
        //     return(
                <div className="product_card">
                    <div className="product_card__photo_place">
                        <div className="product_card__cell_place">
                            <div className="cell_place_flex">
                                <div className="cell_percent_place"/>
                                <div className="cell_data"/>
                            </div>
                        </div>

                        <div className="product_card__favorites_place"/>
                    </div>
                    <div className="product_card__data_place">
                        <div className="product_data__flex">
                            <div className="product_data__name"/>
                            <div>
                                <div className={"product_data__price with_cell"}/>
                                <div className="product_data__cell_price"/>
                            </div>
                        </div>
                        <div className="product_data_basket_actions"/>
                    </div>
                </div>
    );
};

