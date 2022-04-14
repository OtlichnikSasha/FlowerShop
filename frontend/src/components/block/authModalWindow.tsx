import React, {FC} from 'react';
interface PropTypes{
    onClick: () => void
}
export const AuthModalWindow: FC<PropTypes> = ({onClick}) => {
    return (
        <div className="modal_window_place">
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={onClick}>
                        <span className="fa fa-times">

                        </span>
                        <span>Закрыть</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

