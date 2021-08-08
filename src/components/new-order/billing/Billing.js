import React, { useState, useContext } from "react";
import { orderContext } from "../index/Index";
import "./billing.css";
import OrderItem from "./OrderItem";

const Billing = () => {
  const [order, setorder, foodCategory, setfoodCategory, type, settype] =
    useContext(orderContext);
  const totalBill = () => {
    let total = 0;
    order.map((dish) => {
      total += dish.total;
    });
    return total;
  };

  return (
    <div className="billing">
      <input className="search" placeholder="Search products" />

      <div className="total-bill">
        <h6>Table No: </h6>
        {/* <h6>{tableNo()}</h6> */}
        <h6>
          Total: <span>{totalBill()}</span>{" "}
        </h6>
      </div>
      <div className="order-data">
        <table className="order-table">
            <thead style={{height:"40px", backgroundColor:"#27252D", borderColor:"#27252D", position: "sticky",top: "0"}}>
                <tr style={{ backgroundColor:"#27252D", borderColor:"#27252D"}}>
                    <th style={{ backgroundColor:"#27252D", borderColor:"#27252D",width:"200px"}}>Item</th>
                    <th className="price_col">Price</th>
                    <th className="qty_col">Qty</th>
                    <th className="price_col">Total</th>
                </tr>
            </thead>
            <thead >
                {order.map((dish, indx) => (
                <OrderItem orderData={dish} key={indx} />
                ))}
            </thead>
        </table>
        </div>
        <div className="table-btn" >
            <button className="chekout-btn"  >Checkout</button>
            <button className="send-kitchen-btn" >Send to kitchen</button>
        </div>
    </div>
  );
};

export default Billing;
