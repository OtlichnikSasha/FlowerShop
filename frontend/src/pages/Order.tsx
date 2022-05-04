import React, {FC} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";

export const Order: FC = () => {
    return (
        <div className="container">
            <Breadcrumbs>
                <Link to="/order" className='breadcrumbs_link'>Оформление заказа</Link>
            </Breadcrumbs>
            <div className="order_place">
                <div className="order_data">
                    <div className="heading">
                        Отправитель
                    </div>
                    <input className="default_input" placeholder="Ваше имя"/>
                    <input className="default_input" placeholder="+7 () ___-___-__"/>
                    <input className="default_input" placeholder="Электронная почта"/>
                    <div className="heading">
                        Получатель
                    </div>
                    <input className="default_input" placeholder="Ваше имя"/>
                    <input className="default_input" placeholder="+7 () ___-___-__"/>
                    <input className="default_input" placeholder="Введите адрес"/>
                    <div className="heading">
                        Дополнительно
                    </div>
                    <div className="heading">
                        Способ оплаты
                    </div>
                    <div className="default_btn">
                        Подтвердить заказ (итоговая цена)
                    </div>
                </div>
                <div className="order_info">
                    <div className="heading">
                        Ваш заказ
                    </div>
                </div>
            </div>
        </div>
    );
};

