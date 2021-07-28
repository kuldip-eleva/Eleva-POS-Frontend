import React, { useState, createContext} from 'react'
import Billing from '../billing/Billing'
import Menu from "../menu/Menu"
export const orderContext = createContext()
const Index = () => {

    const [order, setorder] = useState([])
    const [foodCategory, setfoodCategory] = useState("populor")
    return (
        <div style={{display:"flex"}}>
        <orderContext.Provider value={[order, setorder, foodCategory, setfoodCategory]} >
            <Billing />
            <Menu />
        </orderContext.Provider>
        </div>
    )
}

export default Index;
