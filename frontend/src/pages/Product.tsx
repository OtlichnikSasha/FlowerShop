import React, {useEffect, useState, useCallback} from 'react';
import {Link, useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface ProductParams {
    id: string
}

export const Product: React.FC = () => {
    const {id}: ProductParams = useParams()
    console.log('id', id)
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)

    const {fetchProduct} = useActions();
    const getProduct = useCallback(() => {
        fetchProduct({id})
    }, [id])

    useEffect(() => {
        console.log('hello world')
        fetchProduct({id})
    }, [id])

    const {product, loading} = useTypedSelector(state => state.product)

    const getDataProduct = useCallback(() => {
        if (product && !loading) {
            getNameCategory(product.categoryId)
            getNameSubCategory(product.subcategoryId)
        }
    }, [product])

    useEffect(() => {
        getDataProduct()
    }, [getDataProduct])

    console.log('productProductPage', product)

    const {categories} = useTypedSelector(state => state.categories)
    const {subCategories} = useTypedSelector(state => state.subCategories)
    const getNameSubCategory = (subCategoryId: number) => {
        setSubCategory(subCategories.find(subCategory => subCategory.id === Number(subCategoryId))?.name)
    }

    const getNameCategory = (categoryId: number) => {
        setCategory(categories.find(category => category.id === categoryId)?.name)
    }

    if (loading) {
        return (
            <div>
                Загрузка
            </div>
        )
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <section className="container">
                {product && !loading &&
                    <>
                        <div className="breadcrumbs_place">
                            <Link to="/index">Главная</Link>
                            / <Link to="/catalog">Каталог</Link>
                            / <Link to={`/catalog/${product.categoryId}`}>{category}</Link>
                            / <Link
                            to={`/catalog/${product.categoryId}/${product.subcategoryId}`}>{subCategory}</Link>
                            / <Link
                            to={`/catalog/${product.categoryId}/${product.subcategoryId}/${product.id}`}>{product.name}</Link>
                        </div>
                        <div className="product_place">
                            <div className="product_photos_place">
                                {product.hasOwnProperty("photos") && product.photos.length && product.photos.map(photo => {
                                    return (
                                        <div className="product_small_photo_place" key={photo.src}>
                                            <div className="product_small_photo">
                                                <img
                                                    src={photo.src}
                                                    alt={product.name}
                                                    className="product_card__photo"
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="product_data_center">
                                <img
                                    src={product && product.hasOwnProperty("photos") && product.photos.length ? product?.photos[0].src : ""}
                                    alt={product.name}
                                    className="product_main_photo"
                                />
                            </div>
                            <div className="product_data_right">
                                <div className="product_data__name">
                                    {product.name}
                                </div>
                                {/*<div className="product_data__price">*/}
                                {/*    {product.price} ₽*/}
                                {/*</div>*/}
                                {/*<div className="product_data__cell_price">*/}
                                {/*    {product.cellPrice} ₽*/}
                                {/*</div>*/}
                                <div className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                    {product.price} ₽
                                </div>
                                {
                                    product.cellPercent &&
                                    <div className="product_data__cell_price">
                                        {product.cellPrice} ₽
                                    </div>
                                }
                                <div className="product_add_to_basket">

                                </div>
                                <div className="product_data__heading">
                                    Описание
                                </div>
                                <div className="product_data__description">
                                    {product.description}
                                </div>
                                <div className="product_data__heading">
                                    Детали
                                </div>
                                <div className="product_data__details">

                                </div>
                            </div>
                        </div>
                    </>
                }
            </section>
            <section className="similar_products">
                <div className="container">

                </div>
            </section>
        </div>



    );
};

