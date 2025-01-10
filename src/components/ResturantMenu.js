import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";
const ResturantMenu =()=>{
   
    const {resId} = useParams();
    const [resInfo , SetResInfo] = useState(null);
    useEffect(()=>{
        console.log("useEffect called");
        fetchMenu();
    },[])

   
    console.log("==========="+resId+"============");
    console.log(MENU_API+resId);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId)
        const jdata = await  data.json();
        console.log(jdata);
        SetResInfo(jdata);
    }
   
    if( resInfo === null)
        return <Shimmer/>

    const {name , cloudinaryImageId,id,cuisines} = resInfo.data.cards[2].card.card.info;
    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
    console.log(itemCards);
    // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0].card.info.name

    return(        
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{id}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <ul>
              {itemCards.map(item=>{
                return <li key={item.card.info.id}>{item.card.info.name} - { item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 || item.card.info.price/100 }</li>
              })}
            </ul>
        </div>
    );
}
export default ResturantMenu;