
import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App(){
  
  return (
    <div className=" h-screen flex flex-col background relative overflow-hidden items-center">
      <h1 className=" bg-white rounded-sm text-center mt-[40px]  text-4xl font-bold w-11/12 px-10 py-2">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
