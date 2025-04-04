
import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  const [gif , setGif]=useState('');
  const [loading, setLoading]= useState(false);
  const [tag, setTag]=useState('car');
  

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    // console.log(output);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    
  }

  useEffect(()=>{
    fetchData();
  }, [])

  function clickHandler(){
    fetchData();
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  return(
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="text-2xl underline uppercase font-bold">Random Gif</h1>

      {
        loading? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <input className="w-10/12 text-lg py-3 rounded-xl text-center"
      onChange={changeHandler}
      value={tag}></input>
      <button className="w-10/12 bg-green-100 py-2 px-10 rounded-xl text-2xl font-bold mb-[20px]" onClick={clickHandler}>Genrerate</button>
    </div>
  )
}
