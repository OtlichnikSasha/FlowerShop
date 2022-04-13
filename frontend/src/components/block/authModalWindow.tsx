import React, {FC} from 'react';
interface PropTypes{
    visible: boolean,
    setVisible: typeof React.useState
}
export const AuthModalWindow: FC<PropTypes> = ({visible, setVisible}) => {
    const closeAuthModal = () => {
        setVisible(false)
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "auto";
    }
    return (
        <div className="modal_window_place">
            <div className="modal_window">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={closeAuthModal}>
                        <span className="fa fa-times">

                        </span>
                        <span>Закрыть</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

