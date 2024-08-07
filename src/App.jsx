import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { User } from "./components/User";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path={"/signup"} element={<Signup/>}/>
    <Route path={"/sigin"} element={<Signin/>}/>
    <Route path={"/User"} element={<User/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
