import React, {useContext} from 'react'
import "./style.css"
import aa from "../../images/aa.jpg";
import { orderContext } from '../../index/Index';

const MenuItem = ({data}) => {

    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    
    const addMenuHandler = (e) => {
        let found = order.filter((dish) => dish.item === data.item)
        if(found.length === 0 ){
            setorder(
                [
                    ...order, {
                        item:data.item,
                        category:data.category,
                        price: 199,
                        quantity:1,
                        total: 199
                    }
                ])
        }
        else{
            order.map((dish) => {
                if(dish.item === data.item){ 
                    dish.quantity++; 
                    dish.total+=dish.price
                }
            })
            setorder([...order])
        }
    }

    return (
        <div className="food" onClick={addMenuHandler}>
            {/* <img src={aa}/> */}
            <h3>{data.item}</h3>
            <h5>Rs. {data.price}</h5>
        </div>
    )
}

export default MenuItem;
