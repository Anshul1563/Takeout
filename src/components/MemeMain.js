import React from "react";

export default function Main() {
  const [memeData, setMemeData] = React.useState({
    topText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    async function getMemes() {
      try {
        if (count > 0) {
          const res = await fetch(
            `https://meme-api.herokuapp.com/gimme/${memeData.topText}/30`
          );
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
      setMemeData((prevState) => {
        return { ...prevState, randomImage: allMemes[num].url };
      });
    }
  }, [allMemes]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex mt-16 mb-8 justify-center">
          <input
            className="w-96 rounded-lg slate"
            type="text"
            name="topText"
            placeholder="Enter Subreddit Name"
            value={memeData.topText}
            onChange={handleChange}
          />
        </div>
        <button className="bg-slate-800 text-2xl p-2 text-white font-jost w-[52rem] rounded-lg hover: ring-green-600 hover:ring-4 duration-300">
          Generate a post
        </button>
      </form>
      <img src={memeData.randomImage} className="h-96 mt-4" />
    </div>
  );
}
