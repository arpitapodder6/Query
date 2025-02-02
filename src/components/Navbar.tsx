import Query from "../assets/Query.png";
import bell from "../assets/bell.png"
import edit from "../assets/edit.png"
import globe from "../assets/globe.png"
import group from "../assets/group.png"
import clipboard from "../assets/clipboard.png"
import home from "../assets/home.png"
import lens from "../assets/lens.png"
import account from "../assets/account.png"
import Avatar from "react-avatar"
import{auth } from "../firebase/setup"
import PostPopup from "./PostPopup"
import { useState } from "react"

type searchProp = {
  setSearch:any
}

const Navbar = (props:searchProp) => {

const [post,setPost] = useState(false)

  return (
    <div className="flex pl-20 pt-4 shadow-md h-16 w-screen">
        <img src={Query} className="w-28 h-10 ml-12 " />
        <img src={home} className="w-7 h-7 ml-12" />
        <img src={clipboard} className="w-7 h-7 ml-12" />
        <img src={edit} className="w-7 h-7 ml-12" />
        <img src={group} className="w-7 h-7 ml-12" />
        <img src={bell} className="w-7 h-7 ml-12" />
        <div className="flex border border-spacing-1 ml-10 w-80 p-1 h-9">
            <img src={lens} className="w-3 h-3 mt-2 ml-3" />
            <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Search Query" className="ml-2 outline-none" />
        </div>
       <img src={globe} className="w-5 h-5 ml-5 mt-2" />
       {auth?.currentUser?.emailVerified? <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" /> 
       : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={account}/>}

       <h1 onClick={()=>setPost(true)} className="bg-blue-700 rounded-full text-sm  text-white w-36 pl-6 ml-6 pt-2 h-9">Add question</h1>
       {post && <PostPopup setPost={setPost}/>}
    </div>
  )
}

export default Navbar