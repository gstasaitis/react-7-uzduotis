import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormPage from "./FormPage"
import Products from "./Products"


const Nav = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Nav