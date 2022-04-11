import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Index} from "./pages/Index";
import {Catalog} from "./pages/Catalog";
import {Favorites} from "./pages/Favorites";
import {Product} from "./pages/Product";

const Routes = () => {
    return (
        <Switch>
            <Route path='/index'>
                <Index/>
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
            <Redirect to="/index"/>
        </Switch>
    );
};

export default Routes;