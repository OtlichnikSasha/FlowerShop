import React, {FC, useEffect} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";

export const LegalInformation: FC = () => {
    useEffect(() => {
        document.title = "Юридическая информация";
    }, [])
    return (
        <section className="container">
            <Breadcrumbs>
                <Link className="breadcrumbs_link" to="#">
                    Юридическая информация
                </Link>
            </Breadcrumbs>
            <div className="container_content">
                <h1 className="uppercase_heading">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h1>
                <div className="container_content__top_data">
                    Команда «Весёлого Одувана» заботится не только о красоте и свежести цветов, но и о качественной и
                    своевременной доставке. Наша курьерская служба быстро, бережно и с улыбкой доставит Ваш заказ
                    получателю.
                </div>
                <div className="container_content__sub_data">
                    При заказе от 2 000 руб. доставка БЕСПЛАТНО* в любую точку г. Воронежа. При заказе до 2 000 руб.
                    стоимость доставки рассчитывается индивидуально в зависимости от удаленности района доставки. *не
                    распространяется на праздничные дни, в том числе с 5 по 8 марта стоимость доставки рассчитывается из
                    удаленности вашего района. Возможны задержки до 2,5 часов ввиду загруженности наших курьеров! Просим
                    учитывать это при заказе. Доставка осуществляется с 08.00 до 20.00.
                </div>
            </div>
        </section>
    );
};

