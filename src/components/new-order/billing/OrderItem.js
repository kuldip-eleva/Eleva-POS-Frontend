import React, { useContext} from 'react'
import { orderContext } from '../index/Index';
import "./orderItem.css"
import { DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';

const OrderItem = ({orderData}) => {

    const [order, setorder] = useContext(orderContext);

    //InCRIMENT
    const incrimentHandler = () => {
        order.map((dish) =>{
            if( dish.item === orderData.item){
                dish.quantity++;
                dish.total+=dish.price
            }
        })
        setorder([...order])

    }

    //DECRIMENT
    const decrimentHandler = () => {
        order.map((dish) =>{
            if( dish.item === orderData.item && dish.quantity>0){
                dish.quantity--;
                dish.total-=dish.price
            }
        })
        if(orderData.quantity === 0){
            const refreshedOrder =order.filter((dish) => dish.item !== orderData.item)
            setorder([...refreshedOrder])
            return
        }
        setorder([...order])
    }

    //QUNATITYHANDLER
    const quantityHandler = (val) =>{

        if(val === 0){
            const refreshedOrder =order.filter((dish) => dish.item !== orderData.item)
            console.log("hi", refreshedOrder)
            setorder([...refreshedOrder])
            return
        }
        order.map((dish) =>{
            if( dish.item === orderData.item ){
                dish.quantity = Number(val);
                dish.total = Number(val) * Number(dish.price);
            }
        })
        setorder([...order])
    }

    return (
        <tr>
            <td>{orderData.item}</td>
            <td>{orderData.price}</td>
            <td className="quantity">
                <div 
                    className="qantity-event" 
                    onClick={decrimentHandler}
                >
                 {
                     order.map((dish)=>{
                         if(dish.item === orderData.item){
                             if(dish.quantity < 2  ){
                                return <DeleteOutlined className = "order-icon"/>
                             }else{
                                return <MinusCircleOutlined className = "order-icon"/>
                            }     
                         }
                     })
                 }   
                </div>
                <input 
                    className="quan" 
                    value={orderData.quantity} 
                    onChange ={(e) => quantityHandler(e.target.value)}
                />
                <div 
                    className="qantity-event" 
                    onClick={incrimentHandler}
                ><PlusCircleOutlined className = "order-icon"/></div>
            </td>
            <td>{orderData.total}</td>
        </tr>
    )
}

export default OrderItem
