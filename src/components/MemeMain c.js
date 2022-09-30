import React from "react"

export default function Main(){

    const [memeData,setMemeData] = React.useState({
        topText : '',
        bottomText : '',
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes,() =>{
                let num = Math.floor(Math.random() * allMemes.length)
                setMemeData(prevState =>{
                return {...prevState,randomImage : allMemes[num].url}
        })   
            }))
    }, [memeData.topText])
    

    function handleChange(event){
        console.log(memeData)
        const {name,value} = event.target
        setMemeData(prevState => {
            return {...prevState,[name] : value}
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        let num = Math.floor(Math.random() * allMemes.length)
        setMemeData(prevState =>{
            return {...prevState,randomImage : allMemes[num].url}
        })   
    }
    
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit}>
                <div className="flex mt-16 mb-8 gap-12">
                    <input  className="w-96 rounded-lg slate"
                            type= 'text'
                            name = 'topText'
                            value = {memeData.topText}
                            onChange = {handleChange}
                            
                            
                    />
                    <input  className="w-96 rounded-lg"
                            type ='text'
                            name ='bottomText'
                            value = {memeData.bottomText}
                            onChange = {handleChange}

                    />
                </div>
                <button className="bg-slate-800 text-2xl p-2 text-white font-jost w-[52rem] rounded-lg hover: ring-green-600 hover:ring-4 duration-300"> Generate a new meme </button>
            </form>
            <img src = {memeData.randomImage} className = 'h-96 mt-4' />
        </div>
    )
}