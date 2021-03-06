import React, {useEffect, useState, useCallback} from 'react';
import {Link, useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {SliderProducts} from "../components/sliderProducts";
import {ProductState} from "../types/products";
import {useAuth} from "../hooks/auth_hook";
import {IndividualOrder} from "../components/individualOrder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

interface ProductParams {
    id: string
}

export const Product: React.FC = () => {
    const userId = useAuth().id
    // @ts-ignore
    const {id}: ProductParams = useParams()
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [mainPhoto, setMainPhoto] = useState('')
    const {
        fetchProduct,
        fetchAddBasket,
        fetchRemoveBasket,
        fetchAddFavorite,
        fetchRemoveFavorite,
        fetchBasket,
        fetchSimilarProducts,
        fetchSubCategories
    } = useActions();
    const getProduct = useCallback(() => {
        fetchProduct({id})
    }, [id])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    const {product, loading} = useTypedSelector(state => state.product)
    const {products} = useTypedSelector(state => state.similarProducts)
    const {categories} = useTypedSelector(state => state.categories)
    const {subCategories} = useTypedSelector(state => state.subCategories)
    const getDataProduct = useCallback(() => {
        if (product && !loading) {
            if(!subCategories.length) fetchSubCategories({categoryId: product.categoryId})
            getNameCategory(product.categoryId)
            getNameSubCategory(product.subcategoryId)
            document.title = product.name
            if (product.photos && product.photos.length) setMainPhoto(product.photos[0].src)
            fetchSimilarProducts({categoryId: product.categoryId})
        }
    }, [product])

    useEffect(() => {
        getDataProduct()
    }, [getDataProduct])

    console.log('productProductPage', product)


    const getNameSubCategory = (subCategoryId: number) => {
        setSubCategory(subCategories.find(subCategory => subCategory.id === Number(subCategoryId))?.name)
    }

    const getNameCategory = (categoryId: number) => {
        setCategory(categories.find(category => category.id === categoryId)?.name)
    }

    const changeMainPhoto = (event: any) => {
        setMainPhoto(event.target.src)
    }
    const changeBasket = async (productId: number, count: number) => {
        if (!count) await fetchRemoveBasket({userId, productId})
        else await fetchAddBasket({userId, productId, count})
        await fetchBasket({userId})
        await fetchProduct({id})
    }

    const changeFavorite = async (product: ProductState) => {
        product.favorite_products && product.favorite_products.length ?
            await fetchRemoveFavorite({productId: product.id, userId: id}) :
            await fetchAddFavorite({productId: product.id, userId: id})
    }
    if (loading) {
        return (
            <div>
                ????????????????
            </div>
        )
    }
    return (
        <div>
            <section className="container">
                {product && !loading &&
                    <>
                        <Breadcrumbs>
                            <Link to="/catalog" className="breadcrumbs_link">??????????????</Link>
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
                                {
                                    product.photos && product.photos.length ? product.photos.map(photo => {
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
                                        })
                                        :
                                        <></>
                                }
                            </div>
                            <div className="product_data_center">
                                <img
                                    src={mainPhoto}
                                    alt={product.name}
                                    className="product_main_photo"
                                />
                            </div>
                            <div className="product_data_right">
                                <div className="product_data__subcategory_name">
                                    {subCategory}
                                </div>
                                <div className="product_data__name">
                                    {product.name}
                                </div>
                                <div
                                    className={product.cellPercent ? "product_data__price with_cell" : "product_data__price"}>
                                    {product.price} ???
                                </div>
                                {
                                    product.cellPercent &&
                                    <div className="product_data__cell_price">
                                        {product.cellPrice} ???
                                    </div>
                                }

                                {
                                    product.basket_products && product.basket_products.length ?
                                            <div className="product_data__flex">
                                                <div className="product_data__action"
                                                     onClick={() => changeBasket(product.id, product.basket_products[0].count - 1)}>
                                                    <FontAwesomeIcon icon={faMinus}/>
                                                </div>
                                                <div className="product_data_in_basket">
                                                    <span>?? ??????????????: </span>
                                                    <input className="product_data_basket_input"
                                                           value={product.basket_products[0].count}/>
                                                </div>
                                                <div className="product_data__action"
                                                     onClick={() => changeBasket(product.id, product.basket_products[0].count + 1)}>
                                                    <FontAwesomeIcon icon={faPlus}/>
                                                </div>
                                            </div>
                                        :
                                        <div className="default_btn" onClick={() => changeBasket(product.id, 1)}>
                                            ???????????????? ?? ??????????????
                                        </div>
                                }



                                <div className="product_data__heading">
                                    ????????????????
                                </div>
                                <div className="product_data__description">
                                    {product.description}
                                </div>

                                {product.details && product.details.length ?
                                    <>
                                        <div className="product_data__heading">
                                            ????????????
                                        </div>
                                        {product.details.map(detail => {
                                            return (
                                                <div className="product_data__details" key={detail.id}>
                                                    <div>{detail.key}: {detail.name}</div>
                                                </div>
                                            )
                                        })}
                                    </>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </>
                }
            </section>
            <section className="slider_products_place">
                <div className="container">
                    <div className="slider_products_flex">
                        <div className="heading">??????????????</div>
                        <Link to="/catalog" className="default_btn">
                            ???????? ??????????????
                        </Link>
                    </div>
                    <SliderProducts products={products}/>
                </div>
            </section>
            <IndividualOrder/>
        </div>
    );
};

