import React from "react";

export default function Main(props) {
  const [memeData, setMemeData] = React.useState({
    topText: "",
    randomImage: "",
    subreddit : "",
    title : "",
    link : ""
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    async function getMemes() {
      try {
        if (count > 0 && memeData.subreddit.toLowerCase() !== memeData.topText) {
          console.log("Fetching...")
          const res = await fetch(
            `https://meme-api.herokuapp.com/gimme/${memeData.topText}/30`
          )
          console.log()
          if (res.ok){
            const data = await res.json();
            setAllMemes(data.memes);
            props.sub(data.memes[0].subreddit)
            
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMemes();
  }, [count]);

  React.useEffect(() => {
    if (allMemes.length > 0) {
      let num = Math.floor(Math.random() * allMemes.length);
      console.log("meme set")
      setMemeData((prevState) => {
        return { ...prevState, randomImage: allMemes[num].url, subreddit : allMemes[num].subreddit, title : allMemes[num].title, link : allMemes[num].postLink};
      });
    }
  },[allMemes]);

  function handleChange(event) {
    console.log("text changed")
    const { name, value } = event.target;
    setMemeData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);
    if (memeData.subreddit.toLowerCase() === memeData.topText && allMemes.length > 0) {
      let num = Math.floor(Math.random() * allMemes.length);
      console.log("meme set")
      setMemeData((prevState) => {
        return { ...prevState, randomImage: allMemes[num].url, subreddit : allMemes[num].subreddit, title : allMemes[num].title, link : allMemes[num].postLink};
      });
    }

  }
  console.log(memeData)

  

  return (
    <div className="flex flex-col items-center px-2 ">
      <form onSubmit={handleSubmit} className="flex mt-16 mb-8 justify-center gap-4 shrink flex-wrap min-w-0 max-w-full">
        
          <input
            className="w-96 rounded-lg slate shrink"
            type="text"
            name="topText"
            placeholder="Enter Subreddit Name"
            value={memeData.topText}
            onChange={handleChange}
          />
          <button className="shrink text-2xl bg-red-500 p-2 text-white font-jost w-72 rounded-lg hover: ring-slate-900 hover:ring-4 duration-300">
          Generate a post
        </button>
      
      </form>
      <div className="flex w-[598px] flex-col items-center shadow-xl m-6 rounded-lg shrink min-w-0 max-w-full">
      {memeData.title && <p className="font-inter text-3xl font-medium self-stretch p-4 rounded-t-lg bg-slate-800 text-white">{memeData.title}</p>}
      {memeData.randomImage && <a  href= {memeData.link} target ="_blank"><img src={memeData.randomImage} alt ='meme here' className="p-2" /></a>}
      </div>
    </div>
  );
}
