import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from 'react-router-dom'

interface PropTypes {
    page: string
}

export const PageNavigation: FC<PropTypes> = ({page}) => {
    const {pages} = useTypedSelector(state => state.products)
    const pages_array = [];
    if(pages){
        for (let i = 1; i < pages + 1; i++) {
            pages_array.push(i)
        }
    }
    console.log("pages_array", pages_array)

    return (
        <div className="pagination_place">
            {pages_array.map(p => {
                return (
                    <Link
                        to={"/page"}
                        className={p === Number(page) ? "pagination_place__item _active" : "pagination_place__item"}
                        key={p}
                    >
                        {p}
                    </Link>
                )
            })}

        </div>
    );
};

