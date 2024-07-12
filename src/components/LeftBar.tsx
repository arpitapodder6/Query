import finance from "../assets/Finance.png"
import animal from "../assets/animal.png"
import fam from "../assets/fam.png"
import science from "../assets/fam.png"
import health from "../assets/health.png"
import tech from "../assets/tech.png"
import living from "../assets/living.png"


type MenuProp = {
  setMenu:any
}

const LeftBar = (props:MenuProp) => {
  return (
    <div className="pl-20 pt-5 text-sm">
      <div className="flex curser-pointer" onClick={()=> props?.setMenu("finance")}>
        <img src={finance} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Finance</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("living")}>
        <img src={living} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Health living</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("science")}>
        <img src={science} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Science</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("health")}>
        <img src={health} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Health</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("technology")}>
        <img src={tech} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Technology</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("animals")}>
        <img src={animal} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Animals</h1>
      </div>
      <div className="flex mt-5 curser-pointer"  onClick={()=> props?.setMenu("relationships")}>
        <img src={fam} className="w-4 h-4 rounded-sm" />
        <h1 className="ml-3 text-gray-500">Relationships</h1>
      </div>
      <hr  className="mt-3"/>
      <h1 className="mt-3 text-gray-400 text-sm">About . Careers .</h1>
      <h1 className="text-gray-400 text-sm">Terms . Policies .</h1>
      <h1 className="text-gray-400 text-sm">Acceptable use</h1>
    </div>
  )
}

export default LeftBar
        