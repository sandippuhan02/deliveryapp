import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    const fdata = {
        "name": "sandip puhan(function)",
        "Location" : "Balasore",
        "Email":"sandippuhan02@gmail.com"
    }
    const cdata = {
        "name": "Ankit Tiwari(class)",
        "Location" : "Delhi",
        "Email":"tiwariankit12@gmail.com"
    }
    return(
        <div>
           <h1>About us page</h1>
           <User userdata={fdata}/>
           <UserClass userdata={cdata}/>
        </div>
    )
}
export default About;