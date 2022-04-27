import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

interface PropTypes{
    onClick: () => void
}
export const BasketModalWindow: FC<PropTypes> = ({onClick}) => {
    return (
        <div className="modal_window_place">
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={onClick}>
                        <FontAwesomeIcon icon={faTimes}/>
                        <span>Закрыть</span>
                    </div>
                </div>
                <div className="basket_top_data">
                    <div className="heading">
                        Ваша корзина
                    </div>
                </div>
            </div>
        </div>
    );
};

