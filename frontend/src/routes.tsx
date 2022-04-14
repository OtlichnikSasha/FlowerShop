import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Index} from "./pages/Index";
import {Catalog} from "./pages/Catalog";
import {Favorites} from "./pages/Favorites";
import {Product} from "./pages/Product";
import {Vacancies} from "./pages/Vacancies";
import {WeddingFlorist} from "./pages/WeddingFlorist";
import {FreshnessInstruction} from "./pages/FreshnessInstruction";
import {LegalInformation} from "./pages/LegalInformation";
import {ReturnProduct} from "./pages/ReturnProduct";
import {NotFound} from "./pages/NotFound";
import {DeliveryPaymentInformation} from "./pages/DeliveryPaymentInformation";

const Routes = () => {
    return (
        <Switch>
            <Route path='/index'>
                <Index/>
            </Route>
            <Route path="/catalog/:categoryId/:subCategoryId/:page">
                <Catalog/>
            </Route>
            <Route path="/catalog/:categoryId/:subCategoryId">
                <Catalog/>
            </Route>
            <Route path="/catalog/:categoryId">
                <Catalog/>
            </Route>
            <Route path='/catalog'>
                <Catalog/>
            </Route>
            <Route path='/favorites'>
                <Favorites/>
            </Route>
            <Route path='/product/:id'>
                <Product/>
            </Route>
            <Route path='/weddingFlorist'>
                <WeddingFlorist/>
            </Route>
            <Route path='/freshnessInstruction'>
                <FreshnessInstruction/>
            </Route>
            <Route path='/vacancies'>
                <Vacancies/>
            </Route>
            <Route path='/legalInformation'>
                <LegalInformation/>
            </Route>
            <Route path='/returnProduct'>
                <ReturnProduct/>
            </Route>
            <Route path='/delivery_and_payment'>
                <DeliveryPaymentInformation/>
            </Route>

            <Route path='/notFound'>
                <NotFound/>
            </Route>
            <Redirect to="/notFound"/>
        </Switch>
    );
};

export default Routes;