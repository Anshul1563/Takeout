import reactLogo from "../images/React-icon.svg"

export default function Navbar(){
    return(
        <div className="flex  p-6 justify-between bg-slate-900">
            <div className="flex items-center">
                <img src = {reactLogo} alt="react logo" width='60px' />
                <h1 className="text-6xl ml-4 text-cyan-400 font-medium font-jost">ReactFacts</h1>
            </div>
            <div className="text-4xl font-medium  text-white  flex items-end font-jost">React Course - Project 1</div>
        </div>
    )
}