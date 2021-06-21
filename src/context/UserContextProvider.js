import React,{useState,useEffect} from "react"
import UserContext from "./user-context"

const UserContextProvider = props =>{
    const [outlet,setOutlet] = useState("");
    const [_id,setId] = useState("");
    const [token,setToken] = useState("");

    useEffect(()=>{
        if(localStorage.getItem('user')){
            const {_id,outlet,token} = JSON.parse(localStorage.getItem('user'));
        setId(_id);
        setOutlet(outlet);
        setToken(token);     
    }
    },[])
    
    const user = {
        outlet:outlet,
        _id:_id,
        token:token,
        setOutlet:setOutlet,
        setId:setId,
        setToken:setToken
    }


    return <UserContext.Provider value={user}>
        {props.children}
    </UserContext.Provider>

}
export default UserContextProvider