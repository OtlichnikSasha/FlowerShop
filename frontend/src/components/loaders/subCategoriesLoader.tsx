import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const SubCategoriesLoader: FC = () => {
    return (
        <>
            <Link className="subcategories_item"
                  to=''
            >
                <div className="subcategories_item__link">
                    Все
                </div>
            </Link>
            <div className="subcategories_item loading">
                <div className="subcategories_item__link">

                </div>
            </div>
            <div className="subcategories_item loading">
                <div className="subcategories_item__link">

                </div>
            </div>
        </>
    );
};

