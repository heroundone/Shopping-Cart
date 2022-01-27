import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import HomePage from './HomePage';
import ShopPage from './ShopPage';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/shop' element={<ShopPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;