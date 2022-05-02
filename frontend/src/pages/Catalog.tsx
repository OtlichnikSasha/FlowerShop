import React, {useEffect, useState, useCallback} from 'react';
import {Sorting} from "../components/sorting";
import {Link, useParams} from "react-router-dom"
import {SubCategoriesList} from "../components/subCategoriesList";
import {useActions} from "../hooks/useActions";
import {CategoriesList} from "../components/categoriesList";
import {ProductsList} from "../components/productsList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {PageNavigation} from "../components/pageNavigation";
import {Breadcrumbs} from "../components/block/breadcrumbs";
import {useAuth} from "../hooks/auth_hook";
import {ProductState} from "../types/products";

interface CatalogParams {
    categoryId: string | undefined
    subCategoryId: string | undefined
    page: string | undefined
}

interface CategoryState {
    name: string,
    id: number
}

export const Catalog: React.FC = () => {
    // @ts-ignore
    let {categoryId, subCategoryId, page}: CatalogParams = useParams()
    if (categoryId === undefined) categoryId = "1"
    if (subCategoryId === undefined) subCategoryId = "all"
    if (page === undefined) page = "1"
    const limit = 12;
    let offset = 0;
    const {id} = useAuth()
    const [category, setCategory] = useState<CategoryState | null>(null)
    const [firstLoading, setFirstLoading] = useState(true)
    const [subCategory, setSubCategory] = useState("all")
    const {fetchCreateProduct, fetchSubCategories, fetchProducts, fetchFlowers, fetchProductsData, fetchAddBasket, fetchAddFavorite, fetchRemoveFavorite, fetchBasket} = useActions()
    const {flowers} = useTypedSelector(state => state.flowers)
    const getSubCategories = useCallback(() => {
        // Создали категории
        // fetchCreateCategory({name: "Букеты"})
        // fetchCreateCategory({name: "Цветы в горшке"})
        // fetchCreateCategory({name: "Остальное"})

        // Создали подкатегории
        // fetchCreateSubCategory({categoryId: 1, name: "Букет1"})
        // fetchCreateSubCategory({categoryId: 1, name: "Букет2"})
        // fetchCreateSubCategory({categoryId: 1, name: "Букет3"})
        // fetchCreateSubCategory({categoryId: 1, name: "Букет4"})

        // Создали товары
        // fetchCreateProduct({
        //     name: "Букет лилей",
        //     categoryId: 1,
        //     subcategoryId: 1,
        //     price: 500,
        //     cellPrice: 450,
        //     cellPercent: 10,
        //     description: "Букет для тётечки"
        // })
        // fetchCreateProduct({
        //     name: "Букет лопухов",
        //     categoryId: 1,
        //     subcategoryId: 2,
        //     price: 1500,
        //     cellPrice: 1350,
        //     cellPercent: 10,
        //     description: "Букет для лопухов"
        // })
        // Создали цветы
        // fetchCreateFlowers({name: "Розы", number: 100})
        // fetchCreateFlowers({name: "Тюльпаны", number: 50})
        // fetchCreateFlowers({name: "Лопухи", number: 25})
        // fetchCreateFlowers({name: "Одуваники", number: 100})
        // fetchCreateFlowers({name: "Яблоки????", number: 10})

        // Получаем подкатегории по categoryId
        setFirstLoading(true)
        fetchSubCategories({categoryId})
        fetchProducts({categoryId, subcategoryId: subCategoryId, limit, offset})
        fetchProductsData({categoryId, subcategoryId: subCategoryId, limit})
        if (!flowers.length) fetchFlowers()
        getNameCategory()
        document.title = "Каталог";
    }, [categoryId])

    useEffect(() => {
        getSubCategories()
    }, [getSubCategories])


    const getProducts = useCallback(() => {
        // Получаем товары по categoryId и subCategoryId
        getNameSubCategory()
        if (page !== "1") offset = (Number(page) - 1) * limit
        fetchProducts({categoryId, subcategoryId: subCategoryId, limit, offset})
        setFirstLoading(false)
    }, [subCategoryId])

    useEffect(() => {
        getProducts()
    }, [getProducts])


    const {categories} = useTypedSelector(state => state.categories)
    const {subCategories} = useTypedSelector(state => state.subCategories)
    useEffect(() => {
        if (subCategories.length) getNameSubCategory()
    }, [subCategories])


    const getNameCategory = () => {
        setCategory(categories.find(category => category.id === Number(categoryId))?.name)
    }
    const getNameSubCategory = () => {
        if (subCategoryId !== "all") {
            return setSubCategory(subCategories.find(subCategory => subCategory.id === Number(subCategoryId))?.name)
        }
        return setSubCategory("Все")
    }

    const addBasket = async (productId: number) => {
        await fetchAddBasket({userId: id, productId, count: 1})
        await fetchProducts({categoryId, subcategoryId: subCategoryId, limit, offset})
        await fetchBasket({userId: id})
    }

    const changeFavorite = async (product: ProductState) => {
        product.favorite_products && product.favorite_products.length ?
            await fetchRemoveFavorite({productId: product.id, userId: id}) :
            await fetchAddFavorite({productId: product.id, userId: id})
        await fetchProducts({categoryId, subcategoryId: subCategoryId, limit, offset})
    }

    return (
        <section className="container">
            <Breadcrumbs>
                <Link to="/catalog" className="breadcrumbs_link">Каталог</Link> /
                <Link to={`/catalog/${categoryId}`} className="breadcrumbs_link">{category}</Link>
                {
                    subCategory ?
                        <>
                            /
                            <Link
                                to={`/catalog/${categoryId}/${subCategory}`}
                                className="breadcrumbs_link">
                                {subCategory}
                            </Link>
                        </>
                        :
                        <></>
                }

            </Breadcrumbs>
            <div className="catalog_place">
                <div className="sorting_place">
                    <CategoriesList categoryId={categoryId}/>
                    <Sorting categoryId={categoryId} subcategoryId={subCategoryId}/>
                </div>
                <div className="catalog_products_place">
                    <SubCategoriesList categoryId={categoryId} subCategoryId={subCategoryId}/>
                    <ProductsList changeFavorite={changeFavorite} addBasket={addBasket} firstLoading={firstLoading}/>
                </div>
                <PageNavigation page={page}/>
            </div>
        </section>
    );
};

