import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from 'react-router-dom';

import ContainerNewAccount from './pages/new-account/ContainerNewAccount';
import {ContainerPasswordReset} from "./pages/password-reset/ContainerPasswordReset";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <HashRouter>
        <main>
            <Routes>
                <Route path='/reset-password' element={<ContainerPasswordReset/>}></Route>
                <Route path='/' element={<ContainerNewAccount/>}></Route>
            </Routes>
        </main>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
