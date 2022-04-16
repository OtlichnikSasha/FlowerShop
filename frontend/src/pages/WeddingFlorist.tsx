import React, {FC, useEffect} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";

export const WeddingFlorist: FC = () => {
    useEffect(() => {
        document.title = "Свадебная флористика";
    }, [])

    return (
        <section className="container">
            <Breadcrumbs>
                <Link className="breadcrumbs_link" to="#">
                    свадебная флористика
                </Link>
            </Breadcrumbs>

            <div className="container_content">
                <h1 className="uppercase_heading">свадебная флористика</h1>
                <div className="container_content__top_data">
                    Цветочная мастерская «Весёлый Одуван» — это команда профессионалов, которые с радостью воплотят в
                    жизнь любые Ваши мечты об идеальной свадьбе. Наши флористы умело сочетают современные тенденции с
                    классикой, внимательны к деталям и обладают превосходным чувством вкуса. В нашей мастерской Вы
                    можете не только подобрать неповторимый букет невесты, бутоньерку или украшения, но и доверить нам
                    полное флористическое сопровождение вашей свадьбы, включающее оформление площадки для банкета,
                    фотозоны, выездной регистрации и многое другое.
                </div>
                <div className="container_content__sub_data">
                    ПРЕДЛАГАЕМ ВАМ ПОСМОТРЕТЬ НАШИ ПОДСКАЗКИ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА:
                </div>
            </div>
        </section>
    );
};

