
import  star  from "../images/star.png"

export default function Card(props) {
   
  //you have to use curly braces for props every time Because for it to work you have to delve in Js land

  let badgeText;
  if(props.item.openSpots===0)
  {
    badgeText="SOLD OUT"
  }
  else if(props.item.location==="Online")
  {
    badgeText="ONLINE"
  }

    return (
         
        <div className=" relative ml-10 overflow-hidden shadow-lg text-sm flex flex-col flex-none">
         { badgeText && <div className="absolute top-2 left-8 bg-white px-[5px] py-[7px] rounded-lg font-semibold">{badgeText}</div>}  {/* If badge text  */}{/* IN OLDER CODEIt executes ike if openSpots===0 true then display the jsx */}
        <img className="w-[176px] h-[235px] ml-8" src={props.item.coverImg} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex flex-horizontal ">
            <img src={star} alt="star" className="h-4 w-4 rounded-lg"/>
             <h1 className="font-light text-sm ml-1 ">{props.item.stats.rating}</h1>
             <h1 className="font-extralight text-sm ml-1">({props.item.stats.reviewCount})   <span className="gray">{props.item.location}</span> </h1>
            </div>
          <h1 className="text-gray-700 text-base">
             {props.item.title}
          </h1>
          <h1 className="font-bold">From ${props.item.price}<span className="font-light"> /person</span></h1>
        </div>
      </div>
    )
}