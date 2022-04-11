import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from 'react-router-dom'
type PropTypes = {
    categoryId: string,
    subCategoryId: string
};
export const SubCategoriesList: FC<PropTypes> = ({categoryId, subCategoryId}) => {
    const {subCategories, loading} = useTypedSelector(state => state.subCategories)
    console.log('subCategories', subCategories)

    if(loading){
        return(
            <div>
                Загрузка
            </div>
        )
    }

    return (
        <div className="subcategories_place">
            <div className={subCategoryId === "all" ? "subcategories_item _active" : "subcategories_item"}>
                <Link to={`/catalog/${categoryId}/all`} className="subcategories_item__link">
                    Все
                </Link>
            </div>
            {subCategories.length && subCategories.map(subCategory => {
                return (
                    <div className={Number(subCategoryId) === subCategory.id ? "subcategories_item _active" : "subcategories_item"}>
                        <Link to={`/catalog/${categoryId}/${subCategory.id}`}
                              key={subCategory.id}
                              className="subcategories_item__link">
                            {subCategory.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

