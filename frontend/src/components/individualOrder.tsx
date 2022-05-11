import React, {FC} from 'react';
import individualOrder from '../static/img/individual_order.png'

export const IndividualOrder: FC = () => {
    return (
        <div className="individual_order_place">
            <div className="container">
                <div className="individual_order_flex">
                    <div className='individual_order__data_place'>
                        <div className="individual_order__data">
                            <div className="individual_order__data_part">
                                Букет на заказ
                            </div>
                            <div className="individual_order__data_heading">
                                Индивидуальный заказ букета
                            </div>
                            <div className="individual_order__data_hint">
                                Не нашли то, что искали?
                                Оформите индивидуальный заказ! Опишите пожелания по цветовой гамме, составу и упаковке
                            </div>
                            <div className="individual_order__btn">
                                Сделать заказ
                            </div>
                        </div>
                    </div>
                    <div className="individual_order__img_place">
                        <img src={individualOrder} alt="Индивидуальный заказ букета"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

