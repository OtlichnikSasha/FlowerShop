import React, {FC, useEffect, useState} from 'react';
import {ProductsList} from "../components/productsList";
import {useAuth} from "../hooks/auth_hook";
import {useActions} from "../hooks/useActions";
import {ProductState} from "../types/products";

export const Favorites: FC = () => {
    const {id} = useAuth()
    const [firstLoading, setFirstLoading] = useState(true)
    const {fetchFavoritesProducts} = useActions()
    useEffect(() => {
        if (id) {
            document.title = "Избранное"
            fetchFavoritesProducts({userId: id})
            setFirstLoading(false)
        }
    }, [id])
    const {fetchAddBasket, fetchAddFavorite, fetchRemoveFavorite} = useActions()
    const changeBasket = (productId: number, count: number) => {
        fetchAddBasket({userId: id, productId, count: count})
        fetchFavoritesProducts({userId: id})
    }

    const changeFavorite = async (product: ProductState) => {
        product.favorite_products && product.favorite_products.length ?
            await fetchRemoveFavorite({productId: product.id, userId: id}) :
            await fetchAddFavorite({productId: product.id, userId: id})
        await fetchFavoritesProducts({userId: id})
    }
    return (
        <div className="container favorites">
            <ProductsList changeBasket={changeBasket} changeFavorite={changeFavorite} firstLoading={firstLoading}/>
        </div>
    );
};

