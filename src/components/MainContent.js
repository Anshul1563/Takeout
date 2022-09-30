export default function MainContent(){
    return (
        <div className=" bg-slate-800 text-white min-h-screen bg-logo bg-no-repeat bg-right bg-[length:500px_500px]">
        <h1 className="text-6xl font-bold font-inter h-40 flex items-end px-12">Fun Facts about React</h1>
        <ul className="text-3xl pl-24 pt-12 flex flex-col justify-between  h-56 list-disc">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li> Maintained by facebook</li>
            <li>100k stars on GitHub</li>
        </ul>
        </div>
    )
}