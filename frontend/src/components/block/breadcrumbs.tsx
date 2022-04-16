import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface PropsTypes{
    children: any
}
export const Breadcrumbs: FC<PropsTypes> = ({children}) => {
    return (
        <div className="breadcrumbs_place">
            <Link to="/index" className="breadcrumbs_link">Главная</Link> / {children}
        </div>
    );
};

