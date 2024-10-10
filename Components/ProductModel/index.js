import Dialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import ProductZoom from "../ProductZoom";
import Rating from '@mui/material/Rating';



const ProductModel = (props) => {

    

    return (
        <>
            <Dialog open={true} className="ProductModel" onClose={() => props.closeProductModel()}>
                <Button className="close_" onClick={() => props.closeProductModel()} ><MdClose /></Button>
                <h4 className="mb-3">All Natural Italian-Style Chicken Meatballs</h4>
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

                <hr />

                <div className="row mt-2 productDetailModel">
                    <div className="col-md-5">
                        <ProductZoom/>
                    </div>


                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mt-3 mb-2">
                            <span className="oldPrice lg">$20.00</span>
                            <span className="netPrice text-danger lg">$14.00</span>
                        </div>
                        <span className="badge bg-success d-block">IN STOCK</span>

                        <div className="actions">
                            <Button className="btn-round btn-sml mt-3" variant="outlined"><FaRegHeart /> &nbsp; Add to Wishlist</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModel;
