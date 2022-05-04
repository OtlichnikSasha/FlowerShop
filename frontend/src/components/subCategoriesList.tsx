import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from 'react-router-dom'
import {SubCategoriesLoader} from "./loaders/subCategoriesLoader";

type PropTypes = {
    categoryId: string,
    subCategoryId: string
};
export const SubCategoriesList: FC<PropTypes> = ({categoryId, subCategoryId}) => {
    const {subCategories, loading} = useTypedSelector(state => state.subCategories)
    return (
        <div className="subcategories_place">
            {
                loading ?
                    <SubCategoriesLoader/>
                    :
                    <>
                        <Link className={subCategoryId === "all" ? "subcategories_item _active" : "subcategories_item"}
                              to={`/catalog/${categoryId}/all`}
                        >
                            <div className="subcategories_item__link">
                                Все
                            </div>
                        </Link>
                        {
                            subCategories.length ? subCategories.map(subCategory => {
                                    return (
                                        <Link
                                            to={`/catalog/${categoryId}/${subCategory.id}`}
                                            key={subCategory.id}
                                            className={Number(subCategoryId) === subCategory.id ? "subcategories_item _active" : "subcategories_item"}
                                        >
                                            <div className="subcategories_item__link">
                                                {subCategory.name}
                                            </div>
                                        </Link>
                                    )
                                })
                                :
                                <></>
                        }
                    </>
            }
        </div>
    );
};

