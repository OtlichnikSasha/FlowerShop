import React, {useEffect, useState} from 'react';
import {Sorting} from "../components/sorting";
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'
import {SubCategoriesList} from "../components/subCategoriesList";
import {useActions} from "../hooks/useActions";
import {CategoriesList} from "../components/categoriesList";
import {ProductsList} from "../components/productsList";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface CatalogParams {
    categoryId: string | undefined
    subCategoryId: string | undefined
}

export const Catalog: React.FC = () => {
    console.log(useParams())
    let {categoryId, subCategoryId}: CatalogParams = useParams()
    console.log('Catalog', subCategoryId, categoryId)
    if (categoryId === undefined) categoryId = "1"
    if (subCategoryId === undefined) subCategoryId = "all"

    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState("all")

    const {fetchSubCategories, fetchProducts} = useActions()
    useEffect(() => {
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
        //     name: "Букет роз",
        //     categoryId: 1,
        //     subCategoryId: 1,
        //     price: 1000,
        //     cellPrice: 900,
        //     cellPercent: 10,
        //     description: "Букет для милфочки"
        // })
        // fetchCreateProduct({
        //     name: "Букет тюльпанов",
        //     categoryId: 1,
        //     subCategoryId: 2,
        //     price: 1000,
        //     cellPrice: 900,
        //     cellPercent: 10,
        //     description: "Букет для тюлочёк"
        // })

        // Получаем подкатегории по categoryId
        fetchSubCategories({categoryId})

        getNameCategory()
        getNameSubCategory()

        // Получаем товары по categoryId и subCategoryId
        fetchProducts({categoryId, subcategoryId: subCategoryId})


    }, [categoryId, subCategoryId])
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
            <div className="breadcrumbs_place">
                <Link to="/index">Главная</Link> /
                <Link to="/catalog">Каталог</Link> /
                <Link to={`/catalog/${categoryId}`}>{category}</Link> /
                <Link
                    to={`/catalog/${categoryId}/${subCategory}`}>{subCategoryId === "all" ? "Все" : subCategory}</Link>
            </div>
            <div className="catalog_place">
                <div className="sorting_place">
                    <CategoriesList categoryId={categoryId}/>
                </div>
                <Sorting/>
                <div className="catalog_products_place">
                    <SubCategoriesList categoryId={categoryId} subCategoryId={subCategoryId}/>
                    <ProductsList/>
                </div>
            </div>
        </section>
    );
};

