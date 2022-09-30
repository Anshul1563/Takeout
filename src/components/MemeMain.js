import React from "react";

export default function Main() {
  const [memeData, setMemeData] = React.useState({
    topText: "",
    randomImage: "",
    subreddit : "",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    async function getMemes() {
      try {
        if (count > 0 && memeData.subreddit.toLowerCase() != memeData.topText) {
          console.log("before fetch")
          const res = await fetch(
            `https://meme-api.herokuapp.com/gimme/${memeData.topText}/30`
          )
          if (res.ok){
            const data = await res.json();
            setAllMemes(data.memes);
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
        return { ...prevState, randomImage: allMemes[num].url, subreddit : allMemes[num].subreddit };
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
    if (memeData.subreddit.toLowerCase() == memeData.topText && allMemes.length > 0) {
      let num = Math.floor(Math.random() * allMemes.length);
      console.log("meme set")
      setMemeData((prevState) => {
        return { ...prevState, randomImage: allMemes[num].url, subreddit : allMemes[num].subreddit };
      });
    }

  }
  console.log(memeData)
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex mt-16 mb-8 justify-center gap-4">
          <input
            className="w-96 rounded-lg slate"
            type="text"
            name="topText"
            placeholder="Enter Subreddit Name"
            value={memeData.topText}
            onChange={handleChange}
          />
          <button className="bg-slate-800 text-2xl p-2 text-white font-jost w-72 rounded-lg hover: ring-green-600 hover:ring-4 duration-300">
          Generate a post
        </button>
        </div>
      </form>
      {memeData.randomImage && <img src={memeData.randomImage} className="h-[40rem] mt-4 p-2 border-4 border-black rounded-lg mb-6  " />}
    </div>
  );
}
