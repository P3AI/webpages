import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ContainerNewAccount from './pages/new-account/ContainerNewAccount';
import {ContainerPasswordReset} from "./pages/password-reset/ContainerPasswordReset";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ContainerNewAccount/>}></Route>
            <Route path='/resetPassword' element={<ContainerPasswordReset/>}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
