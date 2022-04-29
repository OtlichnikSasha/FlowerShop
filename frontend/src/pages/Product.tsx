import React, {useEffect, useState, useCallback} from 'react';
import {Link, useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Breadcrumbs} from "../components/block/breadcrumbs";

interface ProductParams {
    id: string
}

export const Product: React.FC = () => {
    // @ts-ignore
    const {id}: ProductParams = useParams()
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [mainPhoto, setMainPhoto] = useState('')

    const {fetchProduct} = useActions();
    const getProduct = useCallback(() => {
        fetchProduct({id})
    }, [id])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    const {product, loading} = useTypedSelector(state => state.product)

    const getDataProduct = useCallback(() => {
        if (product && !loading) {
            getNameCategory(product.categoryId)
            getNameSubCategory(product.subcategoryId)
            document.title = product.name
            if (product.hasOwnProperty("photos") && product.photos.length) setMainPhoto(product.photos[0].src)
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

    const changeMainPhoto = (event: any) => {
        setMainPhoto(event.target.src)
    }
    if (loading) {
        return (
            <div>
                Загрузка
            </div>
        )
    }
    return (
        <div>
            <section className="container">
                {product && !loading &&
                    <>
                        <Breadcrumbs>
                            <Link to="/catalog" className="breadcrumbs_link">Каталог</Link>
                            / <Link to={`/catalog/${product.categoryId}`} className="breadcrumbs_link">{category}</Link>
                            / <Link to={`/catalog/${product.categoryId}/${product.subcategoryId}`}
                                    className="breadcrumbs_link"
                        >
                            {subCategory}
                        </Link>
                            / <Link
                            to="#" className="breadcrumbs_link">{product.name}</Link>
                        </Breadcrumbs>
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
                                                    onClick={changeMainPhoto}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="product_data_center">
                                <img
                                    src={mainPhoto}
                                    alt={product.name}
                                    className="product_main_photo"
                                />
                            </div>
                            <div className="product_data_right">
                                <div className="product_data__name">
                                    {product.name}
                                </div>
                                <div
                                    className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
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
                                {product.details.length ? product.details.map(detail => {
                                    return (
                                        <div className="product_data__details" key={detail.id}>
                                            <div>{detail.key}</div>
                                            <div>{detail.value}</div>
                                        </div>
                                    )
                                })
                                :
                                    <></>
                                }
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

