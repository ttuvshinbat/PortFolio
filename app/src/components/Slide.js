import react, { useState } from 'react';
import url_1 from '../pictures/nature-1.jpg';
import url_2 from '../pictures/nature-2.jpg';
import url_4 from '../pictures/nature-4.jpg';
import url_5 from '../pictures/nature-5.jpg';
import url_6 from '../pictures/nature-6.jpg';
import url_7 from '../pictures/nature-7.jpg';
import url_8 from '../pictures/nature-8.jpg';
import url_9 from '../pictures/nature-9.jpg';
import url_10 from '../pictures/nature-10.jpg';
import url_11 from '../pictures/nature-11.jpg';
import Carousel from "react-bootstrap/Carousel";
import "../css/nav.css"
import { show } from "./context/ThemeContext"
import NavbarMenu from './Navbar';
import PictureOne from './picture/picture-1';



const Slide = () => {
    const pictures =
        [{ picture: url_1 },
        { picture: url_2 },
        { picture: url_4 },
        { picture: url_5 },
        { picture: url_6 },
        { picture: url_7 },
        { picture: url_8 },
        { picture: url_9 },
        { picture: url_10 },
        { picture: url_11 },]
    const [theme, setTheme] = useState(true);
    const show = () => {
        setTheme(!theme)
    }
    return (
        <div>
            <div className='backgroundImg' >
                <div className='center'>
                    <Carousel variant="flat" className='position-1  ' controls="false">
                        {pictures.map(data => {
                            return (
                                <Carousel.Item interval={5000} className='box-size' >
                                    <img
                                        className={theme ? 'd-block imgClass' : 'd-block  imgClass click'}
                                        src={data.picture}
                                        alt="First slide" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <Carousel variant="" className='position-2 box-size-2'>
                        {pictures.map(data => {
                            return (
                                <Carousel.Item interval={5000} className='' >
                                    <img
                                        className="d-block  imgClass-2"
                                        src={data.picture}
                                        alt="First slide" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <NavbarMenu />


                    <button className='changeButton fw-bold' onClick={show}> <span className='d-none d-md-inline-block'>Change</span>Opacity</button>
                </div>
            </div>

        </div >
    )

}
export default Slide;