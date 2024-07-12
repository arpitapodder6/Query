import Avatar from "react-avatar"
import { auth } from "../firebase/setup"
import account from "../assets/account.png"
import question from "../assets/question.png"
import pen from "../assets/pen.png"
import edit from "../assets/edit.png"
import contentImg from "../assets/contentImg.jpg"
import { doc, addDoc, collection, getDocs } from "firebase/firestore"
import { storage } from "../firebase/setup"
import { useEffect, useState } from "react"
import comment from "../assets/comment.png"
import { Link } from "react-router-dom"
import PostPopup from "./PostPopup"

type searchProp = {
  search:any,
  menu:any
}
 
const RightBar = (props:searchProp) => {

  const questionRef = collection(storage,"questions")
  const [questionData, setQuestionData] = useState<any>([])
  const [commentToggle, setCommentToggle] = useState(false)
  const [questionID, setQuestionID] = useState("")
  const [answers, setAnswers] = useState("")
  const [post,setPost] = useState(false)

  const getQuestion = async() =>{
      try{
        const data = await getDocs(questionRef)
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }))
        setQuestionData(filteredData)

      }catch(err){
        console.error(err)
      }

  }

  const answerDoc = doc(storage,"questions",`${questionID ? questionID : Math.random()}`)
  const answerRef = collection(answerDoc, "answers")

  const addAnswer = async() => {
    try{
      await addDoc(
        answerRef,
       { ans:answers}
      )

    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getQuestion()
  },[])

  console.log(questionData)


  return (
    <div className="p-2 rounded-sm">
      <div className="bg-white p-2 h-20 border border-spacing-1 ">
       <div className="flex">
       {auth?.currentUser?.emailVerified? <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" /> 
       : <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" src={account}/>}

       <input onClick={()=> setPost(true)} placeholder="what do you want to ask or share?" className="bg-gray-100 border border-spacing-1 p-1 
       ml-4 rounded-full w-full placeholder-gray-600 cursor-pointer" />
       </div>
       <div className="flex pt-2">
        <div onClick={()=> setPost(true)} className="ml-24 flex cursor-pointer">
        <img src={question} className="w-5 h-5" />
        <h1 className="ml-2">Ask</h1>
        </div>
        <h1 className="ml-28">|</h1>
        <div className="ml-24 flex">
        <img src={edit} className="w-5 h-5" />
        <h1 className="ml-2">Answer</h1>
        </div>
        <h1 className="ml-28">|</h1>
        <div onClick={()=> setPost(true)} className="ml-24 flex cursor-pointer">
        <img src={pen} className="w-5 h-5" />
        <h1 className="ml-2">Post</h1>
        </div>
       </div>
       </div>

        {questionData.filter((data:any)=> props?.search ? data?.question.includes(props?.search): data?.question?.includes(props?.menu)).map((data:any)=>{
          return <>
           <div className="bg-white mt-2 p-2">
        <div className="flex">
        {auth?.currentUser?.emailVerified? <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" name={data?.email ?? account}/> 
       : <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" src={account}/>} 
       <h1 className="ml-3 font-bold ">{data?.email.substring(0,data.email.indexOf("@"))}</h1>
        </div>
       
        <h1 className="ml-4 mt-2 font-bold">{data?.question}?</h1>
        <hr className="mt-3"/>
        <div className="flex">
      <img src={comment} onClick={()=>{
        setQuestionID(data?.id)
        setCommentToggle(true)}} className="w-5 h-5 mt-3 cursor-pointer ml-3" />
        <Link to="/answers" state={{id:data?.id}}><button className="border border-spacing-1 p-1 mt-2 rounded-full ml-3 ">Answer</button></Link>
        </div>
        {commentToggle && <div className="flex mt-3">
        {auth?.currentUser?.emailVerified? <Avatar round size="35" className="mt-0.5 ml-1 cursor-pointer" name={auth?.currentUser?.email ?? account}/> 
       : <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" src={account}/>} 
        <input onChange={(e)=> setAnswers(e.target.value)} placeholder="Add a comment" className="bg-gray-100 border border-spacing-1 p-1 
       ml-4 rounded-full w-full placeholder-gray-600 h-10" />
        <Link to= "/answers" state={{id:data?.id}}>
        <button onClick={()=>{
          addAnswer()
          setCommentToggle(false)}} className="bg-blue-700 text-white rounded-full p-2 w-60 ml-3 ">Add question</button>
          </Link>
        </div>}
       </div>
       {/* <img src={contentImg}/> */}
          </>
        })}
  {post && <PostPopup setPost={setPost}/>}
    </div>
  )
}

export default RightBar

      
       
   
      