// import { useContext, useEffect } from "react";


// import { MyContext } from "../../App";

// const SignIn = () =>{

//     const context = useContext(MyContext);

//     useEffect(()=>{
//         context.setisHeaderFooterShow(false);
//     },[]);

//     return(
//         <section className="section signInPage">
//             <div className="container">
//                 <h1>Sign In</h1>
//             </div>
//         </section>
//     )
// }

// export default SignIn;






import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../App";
import Log from '../../assets/images/log.svg';
import Register from '../../assets/images/register.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




// import { Link } from 'react-router-dom';

const SignIn = () => {
    const context = useContext(MyContext);
    const containerRef = useRef(null);

    useEffect(() => {
        // Hide header and footer when this component mounts
        context.setisHeaderFooterShow(false);

        // Selecting the buttons using refs and adding event listeners
        const signInBtn = document.querySelector("#sign-in-btn");
        const signUpBtn = document.querySelector("#sign-up-btn");

        const container = containerRef.current;

        signUpBtn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        signInBtn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

        // Cleanup event listeners when the component unmounts
        return () => {
            signUpBtn.removeEventListener("click", () => {
                container.classList.add("sign-up-mode");
            });
            signInBtn.removeEventListener("click", () => {
                container.classList.remove("sign-up-mode");
            });
        };
    }, [context]);

    return (
        <section className="section signIn">
            <div className="container" ref={containerRef}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <a className="border-effect forgot_pass mt-2" >Forgot Password?</a>
                            <input type="submit" value="Login" className="btn solid mt-2" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"><FaFacebookF/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"><FaTwitter/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"><FaGoogle/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"><FaFacebookF/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"><FaTwitter/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"><FaGoogle/></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img className="image" src={Log} alt='LogIn illusration' />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img className="image" src={Register} alt='Register illustration' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
