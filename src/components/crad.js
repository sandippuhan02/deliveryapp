const Crad = (props) => {
    const { resdata } = props;
   
    // console.log(props.resdata.areaName);
    const{name , avgRating , cuisines , areaName} = props.resdata.info
  
    return (
      <div className="res-card">
        <div className="card-img">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resdata.info.cloudinaryImageId}/>
        </div>
        <div>          
          <h3>{name}</h3>
          <div>Rating : {avgRating}</div>
          <div>{cuisines.join(" ,")}</div>
          <div>{areaName}</div>
        </div>
      </div>
    );
  };

  export default Crad;