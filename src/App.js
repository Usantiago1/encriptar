import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loggin from "./loggin";
import Encriptar from "./encriptar";

const App = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Loggin/>}></Route>
            <Route path="/Encriptar" element={<Encriptar/>}></Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}

export default App;