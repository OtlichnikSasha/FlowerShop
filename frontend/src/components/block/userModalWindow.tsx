import React, {FC, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {RegistrationModalWindow} from "../userBlock/registrationModalWindow";
import {AuthorizationWindow} from "../userBlock/authorizationWindow";

interface PropTypes {
    setVisible: React.ComponentState
}

export const UserModalWindow: FC<PropTypes> = ({setVisible}) => {
    const [page, setPage] = useState<number>(1)
    const closeModalWindow = () => {
        setVisible(false)
        document.body.style.overflow = "auto";
    }
    return (
        <div className="modal_window_place">
            <div className="modal_window open">
                <div className="modal_window__close_place">
                    <div className="close_place" onClick={closeModalWindow}>
                        <FontAwesomeIcon icon={faTimes} />
                        <span>Закрыть</span>
                    </div>
                </div>
                <div className="modal_window_data_place">
                    {
                        page === 1 ? <RegistrationModalWindow setPage={setPage}/> :
                            <AuthorizationWindow setPage={setPage}/>
                    }
                </div>
            </div>
        </div>
    );
};

