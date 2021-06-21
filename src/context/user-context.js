import React from "react"

const UserContext = React.createContext({
    _id:localStorage.getItem("_id"),
    outlet:localStorage.getItem("outlet"),
    setOutlet:{},
    setId:{}
})

export default UserContext