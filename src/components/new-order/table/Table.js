import React, {useState, useContext} from 'react'
import { orderContext } from '../index/Index';
// import tableData from "./tableDummyData.js"

import "./table.css"
const Table = () => {

    const [order, setorder, foodCategory, setfoodCategory, type, settype] = useContext(orderContext);
    const [tableCount, settableCount] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
    const tableHandler = () => {
        settype("menu")
    }
    return (
        <div style={{height:"100%"}}>
            <div className="tables">
                {tableCount.map((item, indx) => (
                    <div className="table" key={indx} onClick={tableHandler}>
                        <h6>Table {indx+1}</h6>
                        <h6>Order No.</h6>
                        <h6>No of item</h6>
                        <h6>Table {indx+1}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table
