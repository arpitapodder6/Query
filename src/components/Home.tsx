import { useState } from "react"
import LeftBar from "./LeftBar"
import RightBar from "./RightBar"


type searchProp = {
  search:any
}

const Home = (props:searchProp) => {

 const [menu,setMenu] = useState("")

  return (
    <div className="h-full w-screen bg-gray-100 grid grid-cols-6">
        <div>
        <LeftBar setMenu={setMenu}/>
        </div>
        <div className="col-span-3">
        <RightBar search={props?.search} menu={menu}/>
        </div>
    </div>
  )
}

export default Home