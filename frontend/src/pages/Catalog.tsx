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

interface CatalogParams {
    categoryId: string | undefined
    subCategoryId: string | undefined,
    page: string | undefined
}

interface CategoryState {
    name: string,
    id: number
}

export const Catalog: React.FC = () => {
    console.log(useParams())
    let {categoryId, subCategoryId, page}: CatalogParams = useParams()
    if (categoryId === undefined) categoryId = "1"
    if (subCategoryId === undefined) subCategoryId = "all"
    if (page === undefined) page = "1"
    const limit = 12;
    let offset = 0;
    const [category, setCategory] = useState<CategoryState | null>(null)
    const [subCategory, setSubCategory] = useState("all")
    const {fetchSubCategories, fetchProducts, fetchFlowers, fetchProductsData} = useActions()
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
        //     name: "Букет подсолнухов",
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
            setSubCategory(subCategories.find(subCategory => subCategory.id === Number(subCategory))?.name)
        }
    }

    return (
        <section className="container">
            <Breadcrumbs>
                <Link to="/catalog" className="breadcrumbs_link">Каталог</Link> /
                <Link to={`/catalog/${categoryId}`} className="breadcrumbs_link">{category}</Link> /
                <Link
                    to={`/catalog/${categoryId}/${subCategory}`} className="breadcrumbs_link">{subCategoryId === "all" ? "Все" : subCategory}</Link>
            </Breadcrumbs>
            <div className="catalog_place">
                <div className="sorting_place">
                    <CategoriesList categoryId={categoryId}/>
                    <Sorting categoryId={categoryId} subcategoryId={subCategoryId}/>
                </div>
                <div className="catalog_products_place">
                    <SubCategoriesList categoryId={categoryId} subCategoryId={subCategoryId}/>
                    <ProductsList/>
                </div>
                <PageNavigation page={page}/>
            </div>
        </section>
    );
};

