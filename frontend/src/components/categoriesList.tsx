import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from 'react-router-dom'

type PropTypes = {
    categoryId: string | undefined
};
export const CategoriesList: FC<PropTypes> = ({categoryId}) => {
    const {categories, loading} = useTypedSelector(state => state.categories)
    console.log('categoriesList', categoryId)
    if(loading){
        return(
            <div>
                Загрузка
            </div>
        )
    }
    return (
        <div>
            {categories.length && categories.map(category => {
                return (
                    <div className="sidebar_item">
                        <Link
                            to={`/catalog/${category.id}/all`}
                            key={category.id}
                            className={Number(categoryId) === category.id ? "sidebar_item__link _active" : "sidebar_item__link"}>
                            {category.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

