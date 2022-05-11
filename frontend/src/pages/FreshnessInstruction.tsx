import React, {FC, useEffect} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";

export const FreshnessInstruction: FC = () => {
    useEffect(() => {
        document.title = "Уход за цветами";
    }, [])
    return (
        <section className="container">
            <Breadcrumbs>
                <Link className="breadcrumbs_link" to="#">
                    Уход за цветами
                </Link>
            </Breadcrumbs>
            <div className="container_content">
                <h2 className="uppercase_heading">Уход за цветами</h2>
                <div className="container_content__top_data">
                    Команда «Весёлого Одувана» заботится не только о красоте и свежести цветов, но и о качественной и
                    своевременной доставке. Наша курьерская служба быстро, бережно и с улыбкой доставит Ваш заказ
                    получателю.
                </div>
            </div>
            <section className="freshness_section">
                <div className="vacancy_list_heading">
                    ПАМЯТКА ПО УХОДУ ЗА БУКЕТОМ.
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Подготовьте вазу.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Наполните вазу прохладной водой, добавьте содержимое пакетика "Chrysal".</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Подготовьте цветы.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>
                        Подрежьте стебли под струёй воды под углом 45° на 1,5-2 см.
                        Уберите лишнюю листву и шипы – они не должны касаться воды в вазе.
                    </div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Поместите букет в вазу, Поставьте вазу в прохладном месте без сквозняка, вдали от прямых солнечных лучей и фруктов.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Ежедневно мойте вазу, обновляйте воду и подрезайте стебли.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Наслаждайтесь своим букетом. Покажите его друзьям в инстаграм и не забудьте отметить нас @одуван.</div>
                </div>
                <div className="vacancy_list_heading">
                    ПАМЯТКА ПО УХОДУ ЗА ЦВЕТОЧНОЙ КОМПОЗИЦИЕЙ.
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Поставьте цветочную композицию в прохладном месте без сквозняка, вдали от прямых солнечных лучей и фруктов.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Поливайте композицию 1 раз в 3 дня. Лейте воду у основания стеблей, не попадайте на бутоны.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Извлекайте из коробки опавшие на флористическую губку листья и увядающие цветы. Так вы предотвратите гниение вашей композиции.</div>
                </div>
                <div className="freshness_list_item">
                    <span/>
                    <div>Наслаждайтесь своей цветочной композицией. Покажите ее друзьям в инстаграм и не забудьте отметить нас.</div>
                </div>
            </section>
        </section>

    );
};

