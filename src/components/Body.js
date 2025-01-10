import Crad from "./crad";
// import reslist from "../Utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
   //const [resturantList ,setdata] = useState(reslist)
  const [resturantList ,setdata] = useState([])
  const [filteredResturant , SetFilteredResturant] = useState([]);
  const [searchText , setSearchText] = useState("");


 useEffect(()=>{
  fetchData();
 },[]
 );

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    SetFilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
  
  // let resturantList1 = [
  //   {.
  //     info: {
  //       id: "489129",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       areaName: "Marathahalli",      
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 4.2,
  //       parentId: "61955",
  //       avgRatingString: "4.2"
  //     }     
  //   },
  //   {

  //     info: {
  //       id: "489179",
  //       name: "KFC",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       areaName: "Marathahalli",      
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 3.9,
  //       parentId: "61955",
  //       avgRatingString: "4.0"
  //     }
  //   },  
  //   {
  //     info: {
  //       id: "489199",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       areaName: "Marathahalli",      
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 3.0,
  //       parentId: "61955",
  //       avgRatingString: "3.0"
  //     }
  //   }

  //]

  //conditional rendering
  // if(resturantList.length === 0){
  //   return (<Shimmer/>)
  // }
  return resturantList.length === 0 ? <Shimmer/>
  :(
    <div className="body">
      
      <div className="filter">
      <div className="search">
        <input type="text" 
        placeholder ="Enter restrurant Name" 
        className="search-box" 
        value = {searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}></input>
        <button className="search-btn" onClick={()=>{
          const filterdata = resturantList.filter((item)=>{
            const lowerCaseResturantName = item.info.name.toLowerCase();
            return lowerCaseResturantName.includes(searchText.toLowerCase())
          })
          SetFilteredResturant(filterdata)
        
        }}>
          Search</button>
      </div>
        <button className="filter-btn" onClick={() => {
          const filterdata =  resturantList.filter((item)=>{
            return item.info.avgRating  > 4.5
          })        
          setdata(filterdata)
          // console.log("btn-clicked")
          // resturantList = resturantList.filter((item)=>{
          //   return item.info.avgRating > 3.5
          // });
          // {console.log(resturantList)}
        }}>
         
          Top resturants</button>
      </div>
      <div className="res-container">
        {filteredResturant.map((item) => (
        <Link key={item.info.id} to = {"/resturant/"+item.info.id}><Crad  resdata={item} /></Link>
         
        ))}
      </div>
    </div>
  );
};


export default Body;