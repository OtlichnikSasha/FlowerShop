import React from 'react';
import {Nav} from "./nav";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <Nav/>
            <div className="footer_second_level">
                <div className="container">
                    <div className="footer_second_level__part">
                        <div className="footer_nav_item">
                            <Link to="/weddingFlorist" className="nav_link">
                                СВАДЕБНАЯ ФЛОРИСТИКА
                            </Link>
                        </div>
                    </div>
                    <div className="footer_second_level__part">
                        <div className="footer_nav_item">
                            <Link to="/freshnessInstruction" className="nav_link">УХОД ЗА ЦВЕТАМИ</Link>
                        </div>
                        <div className="footer_nav_item">
                            <Link to="/vacancies" className="nav_link">ВАКАНСИИ</Link>
                        </div>
                    </div>
                    <div className="footer_second_level__part">
                        <div className="footer_nav_item">
                            <Link to="/legalInformation" className="nav_link">
                                ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ
                            </Link>
                        </div>
                        <div className="footer_nav_item">
                            <Link to="/returnProduct" className="nav_link">
                                ВОЗВРАТ
                            </Link>
                        </div>
                    </div>
                    <div className="footer_second_level__part">
                        <div className="social_network__heading">
                            Социальные сети
                        </div>
                        <div className="social_network_place">
                            <a className="right_nav__item" href="" target="_blank">
                                <div className="right_nav__item icon">
                                    <span className="fab fa-instagram"/>
                                </div>
                            </a>
                            <a className="right_nav__item" href="" target="_blank">
                                <div className="right_nav__item icon">
                                    <span className="fab fa-vk"/>
                                </div>
                            </a>
                            <a className="right_nav__item" href="" target="_blank">
                                <div className="right_nav__item icon">
                                    <span className="fab fa-facebook"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

