import { useState } from "react"

export default function Random() {

  const [gif,setGif]=useState('');

  function clickHandler(){

  }


  return(
    <div className="w-1/2 h-[450px] bg-green-400 rounded-lg border border-black flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      <img src={gif} width="450"/>
      <button className="w-10/12 bg-green-100 py-2 px-10 rounded-xl text-2xl font-bold" onClick={clickHandler}>Genrerate</button>
    </div>
  )
}
