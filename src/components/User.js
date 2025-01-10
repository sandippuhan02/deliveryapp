import './User.css';
import { useState, useEffect } from 'react';
const User = (props)=>{
    const{name,Location,Email} = props.userdata;
    const[count,setCount]=useState(1)
    const[count2]=useState(2)
   
    return(
        <div className="user-card">
            <div className="countcard" id="card">
                <h3>count{count}:{count}</h3>
                <h3>count2:{count2}</h3>
                <button onClick={()=>{
                    const update =()=>{
                        return count+1;
                    }
                    setCount(update);
                }}>Click me</button>
            </div>
            <h3>Name :{name}</h3>
            <h3>Location : {Location}</h3>
            <h3>Email:{Email}</h3>
        </div>
    );

}
export default User;