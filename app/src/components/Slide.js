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

import Carousel from "react-bootstrap/Carousel";
import "../css/nav.css"

import NavbarMenu from './Navbar';




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
        ]
    const [theme, setTheme] = useState(true);
    const show = () => {
        setTheme(!theme)
    }
    return (
        <div>
            <div className='backgroundImg' >
                <div className='center'>
                    {/* <Carousel variant="flat" className='position-1  ' controls="false">
                        {pictures.map(data => {
                            return (
                                <Carousel.Item interval={5000} className='box-size' >
                                    <div style={{backgroundImage: `url(${data.picture})`}}>
                                    <img
                                        className={theme ? 'd-block click imgClass' : 'd-block  imgClass '}
                                        src={data.picture}
                                        alt="First slide" />a
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel> */}
                    <Carousel variant="" className='position-2 box-size-2'>
                        {pictures.map(data => {
                            return (
                                <Carousel.Item interval={5000} className='shadow' >
                                    <div style={{backgroundImage: `url(${data.picture})`}}>sa
                                    <img
                                        className="d-block  imgClass-2"
                                        src={data.picture}
                                        alt="First slide" />
                                    </div>
                                </Carousel.Item>
                            )   
                        })}
                    </Carousel>
                    <NavbarMenu />


                    <button className='changeButton fw-bold' onClick={show}> <span className='d-none d-md-inline-block'>Change</span>Opacity</button>
                    <div className=' '>

                        <div className="row ">
                            {pictures.map((data) => {
                                return (
                                    <div className='col-4'>

                                        <div className=" my-2"><img className='three' src={data.picture} alt="" /></div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>

                </div >
            </div >
        </div >


    )
}
export default Slide;