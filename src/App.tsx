import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import Answers from "./components/Answers";

export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/main" element={<Main />} />
    <Route path="/answers" element={<Answers />} />
   </Routes>
   </>
  )
}