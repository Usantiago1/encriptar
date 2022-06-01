import { BrowserRouter, Route, Routes } from "react-router-dom";


import Encriptar from "./encriptar";

const App = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Encriptar/>}></Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}

export default App;