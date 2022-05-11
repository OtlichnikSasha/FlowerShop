import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {BasketProductsList} from "../basketProductsList";

interface PropTypes {
    setVisible: React.ComponentState
}

export const BasketModalWindow: FC<PropTypes> = ({setVisible}) => {
    const closeBasket = () => {
        setVisible(false)
        document.body.style.overflow = "auto";
    }
    return (
        <div className="modal_window_place">
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={closeBasket}>
                        <FontAwesomeIcon icon={faTimes}/>
                        <span>Закрыть</span>
                    </div>
                </div>
                <div className="basket_top_data">
                    <div className="heading">
                        Ваша корзина
                    </div>
                </div>
                <BasketProductsList/>
            </div>
        </div>
    );
};

