import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import PasswordChecklist from "react-password-checklist"

const SignUp = ()=>{
    const [email,setEmail] = useState(null);
    const [name,setName] = useState();
    const [password,setPassword] = useState("");
    const [cpassword,setCPassword] = useState("");
    const [isvalid,setIsvalid] = useState(false)


    const navigate = useNavigate()
    const redirect = ()=>{
        navigate("/login")
    }
    //  some code
    const valid = ()=>{
        if(name&&email&&isvalid&&email){
                toast.promise(new Promise(async (resolve,reject)=>{
                   document.getElementsByClassName("sign-up-btn")[0].style.display = "none"
                   let response = await axios.post("http://localhost:5000/registration",{
                    email: email,
                    name: name,
                    password: password
                   }) 
                   console.log(response.data);   
                   if(response.data?.status){
                        resolve()
                        document.getElementsByClassName("sign-up-btn")[0].style.display = "block"
                        localStorage.setItem("token",response.data.status)
                   }        
                }),
                {pending: "Loading data",
                success: "done",
                error: "something went wrong"})
            
        }else{
            toast.error("something went wrong")
        }
    }

   console.log(email);



    return(
        <>
        <div className="Login"></div>
            <div className="box">
                <div>
                <h1>Registration</h1>
                <hr></hr>
                <div className="login-box Register"> 
                <input type="email" placeholder="Email" onChange={(val)=>{
                    const regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
                    if(val.target.value.match(regex)){
                        setEmail(val.target.value);
                    }else{
                        setEmail(null)
                    }
                }}></input>
                <input type="text" placeholder="Name" onChange={(val)=>{
                    setName(val.target.value);
                }}></input>
                <input type="password" placeholder="Password" onChange={(val)=>{
                    setPassword(val.target.value);
                }}></input>
                
                <input type="password" placeholder="Confirm Password" onChange={(val)=>{
                    setCPassword(val.target.value);
                }}></input>
                <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
                minLength={7}
				value={password}
				valueAgain={cpassword}
                onChange={(isValid)=>{
                    setIsvalid(isValid);
                }}
			    />
                <button className="sign-up-btn" onClick={valid}>Sign-up</button>
                </div>
                <p className="bottom-text">having account? <button onClick={redirect}>login</button></p>
                </div>
            </div>
                <ToastContainer 
                theme="dark" transition={Slide} position="top-center" hideProgressBar autoClose={1200}
                />
        </>
    )
}
export default SignUp;