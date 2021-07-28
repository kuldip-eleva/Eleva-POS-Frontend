import React,{useState, useContext} from 'react'
import { orderContext } from '../index/Index'
import "./billing.css"
import OrderItem from './OrderItem'

const Billing = () => {

    const [type, settype] = useState("Quick-bill")
    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    const totalBill = () => {
        let total = 0;
        order.map((dish) => {total+=dish.total})
        return total;
    }

    return (
        <div className="billing">
            <div className="billing-options">
                <button className={type === "Quick-bill" ? "selected" : "unselected"} onClick={()=>settype("Quick-bill")}>Quick Bill</button>
                <button className={type === "Fine-Dine" ? "selected" : "unselected"} onClick={()=>settype("Fine-Dine")}>Fine Dine</button>
                <button className="close">Close register</button>
                <button className={type === "Take-away" ? "selected" : "unselected"} onClick={()=>settype("Take-away")}>Take away</button>
                <button className={type === "Delivery" ? "selected" : "unselected"} onClick={()=>settype("Delivery")}>Delivery</button>
                <button className="kto">KOT</button>
            </div>
            <div className="order_data">
                <table>
                    <thead >
                        <tr className="heading">
                            <th>Item</th>
                            <th className="price_col">Price</th>
                            <th className="qty_col">Qty</th>
                            <th className="price_col">Total</th>
                        </tr>
                    </thead>
                    {type === "Quick-bill" && order.map((dish, indx) => (
                        <OrderItem orderData={dish} key={indx}/>
                    ))}
                    
                </table>
            </div>
            {type === "Quick-bill" &&
                <div className="total-bill">
                    <h3>Total</h3>
                    <h3>{totalBill()}</h3>
                </div>
                // <button></button>
            }
        </div>
    )
}

export default Billing
