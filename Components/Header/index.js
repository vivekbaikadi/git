import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { LuUser2 } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import SearchBox from './SearchBox';
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";


const Header = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(true);
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>

                            <SearchBox />

                            <div className='part3 d-flex align-items-center'>

                                {
                                    context.isLogin !== true ? <Link to="/signIn" ><Button className='btn-round signIN' >Signin</Button></Link> : <Button className='circle mr-3'><LuUser2 /></Button>
                                }

                                <div className='cartTab'>
                                    <Button className='circle ml-3'><PiShoppingCart /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>0</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;



// import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/logo.png';
// import Button from '@mui/material/Button';
// import { LuUser2 } from "react-icons/lu";
// import { PiShoppingCart } from "react-icons/pi";
// import SearchBox from './SearchBox';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Header = () => {
//     const navigate = useNavigate();
//     const [showSearchBox, setShowSearchBox] = useState(false);

//     const viewCart = () => {
//         navigate('/cart');
//     };

//     // Toggle search box on mobile
//     const toggleSearchBox = () => {
//         setShowSearchBox(!showSearchBox);
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="container">
//                     <div className="logoWrapper d-flex align-items-center col-sm-12 col-md-2">
//                         <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
//                     </div>

//                     <div className='part2 d-flex align-items-center col-sm-12 col-md-10'>
//                         {/* Show search box if not in mobile view */}
//                         {!showSearchBox && <SearchBox />}
//                         {/* Show search button in mobile view */}
//                         <button className='searchButton d-md-none' onClick={toggleSearchBox}>
//                             🔍
//                         </button>

//                         <div className='part3 d-flex align-items-center'>
//                             <Button className='circle mr-3'><LuUser2 /></Button>
//                             <div className='cartTab'>
//                                 <Button onClick={viewCart} className='circle ml-3'><PiShoppingCart /></Button>
//                                 <span className='count d-flex align-items-center justify-content-center'>0</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Show search box when the button is clicked on mobile */}
//                 {showSearchBox && <div className='mobileSearchBox'><SearchBox /></div>}
//             </header>
//         </>
//     );
// };

// export default Header;
