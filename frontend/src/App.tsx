import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./components/block/header";
import {Footer} from "./components/block/footer";
import Routes from './routes'

const routes = Routes()

function App() {
    return (
        <Router>
            <Header/>
            <div className="content">
                {routes}
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
