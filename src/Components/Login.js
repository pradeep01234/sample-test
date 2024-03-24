import React from "react";
import { useNavigate } from "react-router-dom"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ()=>{
    const notify = () => toast.promise(new Promise((resolve,reject)=>{
        document.getElementsByClassName("btn-login")[0].style.display="none"
        setTimeout(()=>{
            document.getElementsByClassName("btn-login")[0].style.display="block"
            resolve()
        },3000)
    }),{
        pending: "Loading data",
        success: "done",
        error: "something went wrong"
    })
    const navigate = useNavigate()
    const redirect = ()=>{
        navigate("/sign-up")
    }
    return(
        <>
        <div className="Login"></div>
            <div className="box">
                <div>
                <h1>Login</h1>
                <hr></hr>
                <div className="login-box"> 
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button className="btn-login" onClick={notify}>Login</button>
                </div>
                <p className="bottom-text">Not having account? <button onClick={redirect}>sign-up</button>
                </p>
                </div>
            </div>
                <ToastContainer theme="dark" transition={Slide} position="top-center" hideProgressBar autoClose={1200}/>
        </>
    )
}
export default Login;