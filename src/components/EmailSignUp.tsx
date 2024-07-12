import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase/setup"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type emailType = {
    setEmailSignUp:any
}

const EmailSignUp = (props:emailType) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const Signup = async() =>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            toast.success("Please verify the mail Id")
            onAuthStateChanged(auth,(user:any)=>{
                sendEmailVerification(user)
            })

        }catch(err){
            console.error(err);
        }
    }

  return (
    <>
    <ToastContainer/>
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-zinc-950 bg-opacity-80 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-5/10 ">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:items-start">
            <h1 className="cursor-pointer" onClick={()=> props?.setEmailSignUp(false)}>X</h1>
            <h1 className="mt-3 text-lg font-semibold">Sign Up</h1>
            <h1 className="mt-3 text-sm font-semibold">Email</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Your Email" className="outline-blue-400 border border-spacing-1 p-2 w-full mt-3" />
            <h1 className="mt-3 text-sm font-semibold">Password</h1>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Your Password" className="outline-blue-400 border border-spacing-1 p-2 w-full mt-3" />
          </div>
          <hr className="mt-10" />
          <button onClick={Signup} className="bg-blue-700 text-white rounded-full p-2 w-20 ml-96 mt-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
   

  )
}

export default EmailSignUp