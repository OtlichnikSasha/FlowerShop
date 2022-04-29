import React from "react";
import {Index} from "../pages/Index";
import {Catalog} from "../pages/Catalog";
import {Product} from "../pages/Product";
import {Vacancies} from "../pages/Vacancies";
import {WeddingFlorist} from "../pages/WeddingFlorist";
import {FreshnessInstruction} from "../pages/FreshnessInstruction";
import {LegalInformation} from "../pages/LegalInformation";
import {ReturnProduct} from "../pages/ReturnProduct";
import {DeliveryPaymentInformation} from "../pages/DeliveryPaymentInformation";


export const publicRoutes = [
    {
        path: "/index",
        element: <Index/>
    },
    {
        path: "/catalog/:categoryId/:subCategoryId/:page",
        element: <Catalog/>
    },
    {
        path: "/catalog/:categoryId/:subCategoryId",
        element: <Catalog/>
    },
    {
        path: "/catalog/:categoryId",
        element: <Catalog/>
    },
    {
        path: "/catalog",
        element: <Catalog/>
    },
    {
        path: "product/:id",
        element: <Product/>
    },
    {
        path: "/weddingFlorist",
        element: <WeddingFlorist/>
    },
    {
        path: "/freshnessInstruction",
        element: <FreshnessInstruction/>
    },
    {
        path: "/vacancies",
        element: <Vacancies/>
    },
    {
        path: "/legalInformation",
        element: <LegalInformation/>
    },
    {
        path: "/returnProduct",
        element: <ReturnProduct/>
    },
    {
        path: "/delivery_and_payment",
        element: <DeliveryPaymentInformation/>
    },
]