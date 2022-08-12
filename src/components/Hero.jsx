import collage from "../images/collage.png"

export default function Hero()
{
    return(
       <div className="flex flex-col p-[20px] my-[16px] space-y-[16px] font-poppins">
           <img src={collage} alt="collage" className="self-center"/>
           <h1 className=" ml-6 font-bold text-4xl ">Online Experiences</h1>
           <p  className="ml-6 font-light text-xl ">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
       </div>
    )
}
