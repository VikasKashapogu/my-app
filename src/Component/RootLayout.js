import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Outlet} from "react-router-dom";

function RootLayout(){
    return(
        <div>
            <Header/>
            <div style={{minHeight:"80vh"}}>
                <Outlet/>

            </div>
            <Footer/>
        </div>
    )
}