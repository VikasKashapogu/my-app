import './Test2.css'
//import nature2 from'../../nature2.png'
import nature3 from '../../nature3.png'
function Test2(props){
    
    return(
        
            <div className="card" style={{width:"21rem"}}>
  <img src={props.userObj.image} className="card-img-top" alt="No img found" style={{height:"200px"}}></img>
  <img className="logo" src={nature3} alt="logo not found"></img>
  <div className="card-body">
    <h5 className="card-title">{props.userObj.heading}</h5>
    <p className="card-text">{props.userObj.body}</p>
    <p >{props.userObj.name}</p>
    <p class="linehei">{props.userObj.date}</p>
    
  </div>
</div>
        
    )
}
export default Test2;

// style="width: 18rem;"
