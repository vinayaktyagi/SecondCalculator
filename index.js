import React from 'react';
import ReactDOM from 'react-dom';
import {Link,BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import App from './src/app';
import BasicCalc from './src/components/BasicCalc';
import CalcRed from "./src/components/CalcRed";
import "./style.css";

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>

            
            <Route path="/basic" element={<BasicCalc/>} />
            <Route path="/red" element={<CalcRed/>} />
            </Route>
        </Routes>
    </BrowserRouter>

, root);