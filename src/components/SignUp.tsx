
import background from "../assets/background.png"
import Google from "../assets/Google.png"
import Facebook from "../assets/Facebook.png"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider, facebookProvider } from "../firebase/setup"
import { useState } from "react"
import EmailSignUp from "./EmailSignUp"
import {  useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

  const [emailSignUp , setEmailSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate()

  const googleSignin = async() =>{
    try{
     await signInWithPopup(auth,googleProvider)
     
      auth?.currentUser !== null && navigate("/main")
      auth?.currentUser !== null && toast.success("LoggedIn Successfully")
 
    
    }catch(err){
      console.error();
      const error:any = err
      toast.error(error)
    }
  }

  const facebookSignin = async() =>{
    try{
     const data = await signInWithPopup(auth,facebookProvider)

      data?.user !== null && navigate("/main")
      data?.user !== null && toast("LoggedIn Successfully")
    

    }catch(err){
      console.error();
      const error:any = err
      toast.error(error)
    }
  }

  const login = async() => {
    try{
    const data = await signInWithEmailAndPassword(auth,email,password)
      setTimeout(()=>{
        data?.user?.emailVerified && navigate("/main")
      },2000)
    toast.success("LoggedIn successfully")
    }catch(err){
      console.error(err)
    }
  
  }


  return (
    <>
    <ToastContainer autoClose={3000}/>
        <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"}}
    className="flex items-center justify-center">
        <div className="bg-white h-4/6 w-5/10 rounded-sm p-8">
            <h1 className="text-red-700 text-6xl font-bold font-serif text-center">Quora</h1>
            <h1 className="text-center font-bold text-gray-500 mt-3">A place to share knowledge and better understand the world</h1>
            <div className="flex mt-10">
            <div>
            <h1 className="text-zinc-400 text-sm w-72">By continuing you indicate that you agree to Quora’s <span className="text-cyan-700">Terms of Service</span> and <span className="text-cyan-700">Privacy Policy.</span></h1>
            <div onClick={googleSignin} className="flex p-4 border border-spacing-1 items-center w-80 rounded-sm mt-5">
                <img src={Google} className="w-5 h-5 ml-2"/>
                <h1 className="ml-7">Continue with Google</h1>
            </div>
            <div onClick={facebookSignin} className="cursor-pointer flex p-4 border border-spacing-1 items-center w-80 rounded-sm mt-5">
                <img src={Facebook} className="w-5 h-5 ml-2"/>
                <h1 className="ml-7">Continue with Facebook</h1>
            </div>
             <h1 onClick={()=>setEmailSignUp(true)} className="text-center text-sm font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full cursor-pointer p-1">Sign up with Email</h1>
            </div>
            <div className="ml-24">
                <h1>Login</h1>
                <hr className="w-72 mt-3"/>
                <h1 className="mt-4 font-semibold text-sm">Email</h1>
                <input onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" className="border border-spacing-1 p-2 w-72 mt-2" />
                <h1 className="mt-4 font-bold text-sm">Password</h1>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Your Password" className="border border-spacing-1 p-2 w-72 mt-2" />
                <div className="flex mt-4">
                 <h1 className="text-zinc-400 text-sm mt-2 hover:underline cursor-pointer">Forgot Password?</h1>
                  <button onClick={login} className="bg-blue-500 text-white p-2 w-20 ml-24 rounded-full">Login</button>
                </div>
            </div>
            </div>
            <hr className="mt-3" />
            <h1 className="text-sm text-center mt-3 text-zinc-600">About . Careers . Privacy . Terms . Contact . Languages . Your . Ad . Choices . Press© Quora, Inc. 2024</h1>
        </div>
        {emailSignUp ? <EmailSignUp setEmailSignUp={setEmailSignUp}/> : "" }
    </div>
    </>

  )
}

export default SignUp
    