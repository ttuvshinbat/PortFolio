import react from 'react';
import url from "../pictures/nature-1.jpg"
import "../css/navbar.css"




const NavbarMenu = () => {
    return (
        <div className='backgroundImg' >
            <div className='center'>
                <img className='navbarPic' src={url} alt="" />
                <div className='position row justify-space-between'>
                    <div className='position2 '>

                        <input type="button" name="" value='prev' id="" />
                    </div>
                    <div className='position3 '>

                        <input type="button" name="" value='next' id="" />
                    </div>
                </div>


            </div>
        </div>
    )

}
export default NavbarMenu;