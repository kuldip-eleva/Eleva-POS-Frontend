import React, {useContext} from 'react'
import { orderContext } from '../index/Index'
import "./category.css"


const Categorys = () => {

    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    return (
        <div className="categorys">
            <div style={{display:"flex"}}>
            {["populor","food","juice","fruits","pizza","desert","food1", "food2"].map((item) =>(
                <div 
                    className={foodCategory === item ? "select-btn" : "btn"} 
                    onClick={() => setfoodCategory(item)}>
                        {item}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Categorys
