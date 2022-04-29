import {Favorites} from "../pages/Favorites";
import {Basket} from "../pages/Basket";
import {Cabinet} from "../pages/Cabinet";

export const authRoutes = [
    {
        path: "/favorites",
        element: <Favorites/>
    },
    {
        path: "/cabinet",
        element: <Cabinet/>
    },
    {
        path: "/basket",
        element: <Basket/>
    }
]