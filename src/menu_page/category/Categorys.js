import React, {useContext} from 'react'
import { orderContext } from '../index/Index'
import "./style.css"


const Categorys = () => {

    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    return (
        <div className="categorys">
            <div 
                className={foodCategory === "populor" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("populor")}>
                    Populor
            </div>

            <div 
                className={foodCategory === "food" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("food")}>
                    Food
            </div>

            <div 
                className={foodCategory === "juice" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("juice")}>
                    Juice
            </div>

            <div 
                className={foodCategory === "fruits" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("fruits")}>
                    Fruits
            </div>

            <div 
                className={foodCategory === "pizza" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("pizza")}>
                    Pizza
            </div>

            <div 
                className={foodCategory === "desert" ? "select-btn" : "btn"} 
                onClick={() => setfoodCategory("desert")}>
                    Desert
            </div>


        </div>
    )
}

export default Categorys
