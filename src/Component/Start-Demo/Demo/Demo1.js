import React from 'react'
import {useState} from 'react'

function Demo1(){

    let [counter,setCounter]=useState(0)
    let [user,setUser]=useState({uid:20,name:"Raju",age:22})

    function changeState(){
        setCounter(counter+1);
    }
    
    function changeUser(){
        setUser({...user,age:29})
        let copyuser={...user}
        delete copyuser.name;
        setUser(copyuser)
    }
    
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={changeState}>INCREASE ONE</button>
            <h1>{user.uid}</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <button onClick={changeUser}>CHANGE USER</button>
        </div>
    )
}
export default Demo1;