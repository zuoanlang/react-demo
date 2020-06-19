import React from 'react'
import {render} from 'react-dom'
import App from './component/app'
import {BrowserRouter} from "react-router-dom";
import './style.css'

render(
    (
        /*router 管理应用*/
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ), document.getElementById('root')
)