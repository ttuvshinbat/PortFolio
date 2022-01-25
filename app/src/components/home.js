import React from "react";
import Slide from "./Slide.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PictureOne from "./picture/picture-1.js";
import PictureTwo from "./picture/picture-2.js";

import PictureSeven from "./picture/picture-7.js";
import PictureSix from "./picture/picture-6.js";
import PictureEight from "./picture/picture-8.js";
import PictureNine from "./picture/picture-9.js";
import PictureTen from "./picture/picture-10.js";
import PictureFour from "./picture/picture-4.js";

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Slide />
                <Routes>
                    <Route exact path="/" component={Slide} />

                    <Route path="/url1" component={PictureOne} />
                    <Route path="/url2" component={PictureTwo} />

                    <Route path="/url4" component={PictureFour} />
                    <Route path="/url5" component={PictureSix} />
                    <Route path="/url6" component={PictureSeven} />
                    <Route path="/url7" component={PictureEight} />
                    <Route path="/url8" component={PictureNine} />
                    <Route path="/url9" component={PictureTen} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Home;
