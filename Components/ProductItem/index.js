// import Rating from '@mui/material/Rating';
// import { SlSizeFullscreen } from "react-icons/sl";
// import Button from '@mui/material/Button';
// import ProductModel from '../ProductModel';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductItem = () => {

//     const [isOpenProductModel, setisOpenProductModel] = useState(false);

//     const viewProductDetails = (id) => {
//         setisOpenProductModel(true);

//     }

//     const closeProductModel = () =>{
//         setisOpenProductModel(false);
//     }

//     const navigate = useNavigate();

//     const viewproduct = () => {
//         // Add your scanning logic here
//         console.log('Scanning started');
        
//         // Navigate to the ProductDetails page
//         navigate('/scan'); // Navigate to the ProductDetails page
//     };

//     return (
//         <>
//             <div className="item productItem">
//                 <div className="imgWrapper">
//                     <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" alt='' />
//                     <div className="actions">
//                         <Button onClick={() => viewProductDetails(1)} ><SlSizeFullscreen /></Button>

//                     </div>
//                 </div>
//                 <div className="info">
//                     <h4 >All Natural Italian-Style Chicken Meatballs</h4>
//                     <span className="text-success d-block">IN STOCK</span>
//                     <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
//                     <div className="d-flex">
//                         <span className="oldPrice">$20.00</span>
//                         <span className="netPrice text-danger ">$14.00</span>
//                     </div>
//                 </div>
//             </div>

//             {
//                 isOpenProductModel === true && <ProductModel closeProductModel={closeProductModel}/>
//             }
//         </>
//     )
// }

// export default ProductItem






import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import ProductModel from '../ProductModel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = () => {
    const [isOpenProductModel, setisOpenProductModel] = useState(false);
    const navigate = useNavigate();

    const viewProductDetails = (id) => {
        setisOpenProductModel(true);
    };

    const closeProductModel = () => {
        setisOpenProductModel(false);
    };

    const handleProductClick = () => {
        // Navigate to the ProductDetails page with the product ID (example: 1)
        navigate('/product/1');
    };

    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img onClick={handleProductClick}
                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" 
                        className="w-100" 
                        alt='' 
                    />
                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)} >
                            <SlSizeFullscreen />
                        </Button>
                    </div>
                </div>
                <div className="info">
                    {/* Make the product name clickable */}
                    <h4 onClick={handleProductClick} style={{ cursor: 'pointer', color: 'black' }}>
                        All Natural Italian-Style Chicken Meatballs
                    </h4>
                    <span className="text-success d-block">IN STOCK</span>
                    <Rating 
                        className="mt-2 mb-2" 
                        name="read-only" 
                        value={5} 
                        readOnly 
                        size="small" 
                        precision={0.5} 
                    />
                    <div className="d-flex">
                        <span className="oldPrice">INR 200.0</span>
                        <span className="netPrice text-danger ">INR 140.0</span>
                    </div>
                </div>
            </div>

            {isOpenProductModel === true && <ProductModel closeProductModel={closeProductModel} />}
        </>
    );
};

export default ProductItem;
