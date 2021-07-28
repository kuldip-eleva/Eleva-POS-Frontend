import React, { useContext } from 'react'
import Categorys from '../category/Categorys'
import { orderContext } from '../index/Index'
import MenuItem from '../menuItem/MenuItem'
import { menuData } from './dummyMenu'
import "./style.css"


const Menu = () => {

    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    return (
        <div className="div1">
            <Categorys />
            <input 
                className="search"
                placeholder="Search products" 
            />
            <div className="menu-list" >
                { menuData.map((item, indx) => (
                    item.category === foodCategory && <MenuItem key={indx} data={item}/>
                ))}
            </div>
            
        </div>
    )
}

export default Menu;
