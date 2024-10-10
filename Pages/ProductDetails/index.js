import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa6";
import Button from '@mui/material/Button';


const ProductDetails = () => {
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light" style={{ marginRight: "3px" }}>Brands :</span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={5} readOnly size="small" precision={0.5}  />
                                        <span className="text-light cursor" style={{ marginLeft: "3px" }}>1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex align-items-center info mb-3">
                                <span className="oldPrice">INR 200.0</span>
                                <span className="netPrice text-danger">INR 140.0</span>
                            </div>
                            <span className="badge bg-success d-block">IN STOCK</span>

                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <Button className="btn-round btn-sml mt-3" variant="outlined"><FaRegHeart /> &nbsp; Add to Wishlist</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;