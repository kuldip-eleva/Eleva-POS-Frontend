import React, { useContext } from 'react'
import Categorys from '../category/Categorys'
import { orderContext } from '../index/Index'
import MenuItem from './menuItem/MenuItem.js'
import { menuData } from './dummyMenu'
import "./menu.css"


const Menu = () => {

    const [order, setorder, foodCategory, setfoodCategory] = useContext(orderContext);
    return (
        <div className="menu">
            <Categorys />
            <div className="menu-list" >
                { menuData.map((item, indx) => (
                    item.category === foodCategory && <MenuItem key={indx} data={item}/>
                ))}
            </div>
            
        </div>
    )
}

export default Menu;
