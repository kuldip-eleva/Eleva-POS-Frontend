import React, { useState, createContext} from 'react'
import Billing from '../billing/Billing'
import Menu from "../menu/Menu"
import SideBar from '../side-bar/SideBar'
export const orderContext = createContext()
const Index = () => {

    const [order, setorder] = useState([])
    const [type, settype] = useState("menu")
    const [foodCategory, setfoodCategory] = useState("populor")
    return (
        <div>
        <div style={{display:"flex",height:"100%"}}>
            <orderContext.Provider value={[order, setorder, foodCategory, setfoodCategory, type, settype]} >
                <SideBar />
                <Billing />
                <Menu />
            </orderContext.Provider>
        </div>
        </div>
    )
}

export default Index;
