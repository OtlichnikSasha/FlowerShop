import React, {FC, useEffect} from 'react';
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {Link} from "react-router-dom";

export const Vacancies: FC = () => {
    useEffect(() => {
        document.title = "Вакансии";
    }, [])
    return (
        <section className="container">
            <Breadcrumbs>
                <Link className="breadcrumbs_link" to="#">
                    Вакансии
                </Link>
            </Breadcrumbs>
            <div className="container_content">
                <h1 className="uppercase_heading">Вакансии</h1>
                <div className="vacancy_subheading">Вы можете стать частью команды "Веселый Одуван"</div>
                <div className="vacancy_list_heading">Направьте заявку на:</div>
                <div className="vacancy_list_item">- WhatsApp - 8-888-888-88-88</div>
                <div className="vacancy_list_item">- Email - example@mail.ru</div>
            </div>
        </section>
    );
};

