import React, {useContext} from 'react'
import { orderContext } from '../index/Index'
import "./sideBar.css"
import close from "./svg/close.svg"
import delivery from "./svg/delivery.svg"
import invoice from "./svg/invoice.svg"
import kitchen from "./svg/kitchen.svg"
import kot from "./svg/kot.svg"
import menu from "./svg/menu.svg"
import orderIcon from "./svg/order.svg"
import table from "./svg/table.svg"



function SideBar() {

    const [order, setorder, foodCategory, setfoodCategory, type, settype] = useContext(orderContext);
    return (
        <div className="side-bar">
            <div className="task" onClick={()=>settype("table")}>
                <img src={table}  />
            </div>
            <div className="task" >
                <img src={menu} onClick={()=>settype("menu")}/>
            </div>
            <div className="task">
                <img src={kitchen} />
            </div>
            <div className="task">
                <img src={delivery} />
            </div>
            <div className="task">
                <img src={orderIcon} />
            </div>
            <div className="task">
                <img src={invoice} />
            </div>
            <div className="task">
                <img src={kot} />
            </div>
            <div className="close-register">
                <img src={close} />
            </div>
        </div>
    )
}

export default SideBar
