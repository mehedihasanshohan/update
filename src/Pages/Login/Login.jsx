// import { useState } from "react";
// // import ReCAPTCHA from "react-google-recaptcha";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, LoadCanvasTemplateNoReload } from "react-simple-captcha";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [recaptchaValue, setRecaptchaValue] = useState(null);

//   // const handleRecaptchaChange = (value) => {
//   //   setRecaptchaValue(value);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!recaptchaValue) {
//       alert("Please verify the reCAPTCHA");
//       return;
//     }
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("reCAPTCHA Token:", recaptchaValue);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="mt-12">
//         <div className="mb-4">
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <LoadCanvasTemplate></LoadCanvasTemplate>
//           {/* <ReCAPTCHA
//             sitekey="YOUR_RECAPTCHA_SITE_KEY"
//             onChange={handleRecaptchaChange}
//           /> */}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useEffect} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'

const Login = () => {
    // const [disabled, setDisabled] = useState(true);
    // const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname  || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         Swal.fire({
        //             title: 'User Login Successful.',
        //             showClass: {
        //                 popup: 'animate__animated animate__fadeInDown'
        //             },
        //             hideClass: {
        //                 popup: 'animate__animated animate__fadeOutUp'
        //             }
        //         });
        //         navigate(from, { replace: true });
        //     })
    }

    // const handleValidateCaptcha = (e) => {
    //     const user_captcha_value = e.target.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true)
    //     }
    // }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                {/* <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" /> */}
                                <input type="text" name='captcha' placeholder='type the captcha' className='input input-bordered' />
                            </div>
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;