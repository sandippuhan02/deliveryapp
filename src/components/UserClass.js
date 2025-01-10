import './User.css';
import React from 'react';
class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            "count1":1,
            "count2":2
        }
        console.log(props)
    }
    
    render(){
        const{name,Location,Email} = this.props.userdata;
        const{count1,count2} = this.state;
        return(
            <div className="user-card" >
                <div className="countcard" id="card">
                <h3>count1:{count1}</h3>
                <h3>count2:{count2}</h3>
                <button onClick={()=>{
                    this.setState({
                        count1 : this.state.count1+1
                    })
                }}>Click Me</button>
            </div>
            <h3>Name : {name}</h3>
            <h3>Location : {Location}</h3>
            <h4>{Email}</h4>
            </div>
        );
    }
} 
export default UserClass;