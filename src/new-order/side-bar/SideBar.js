import React from 'react'
import "./sideBar.css"
import { PrinterOutlined } from "@ant-design/icons";

function SideBar() {
    return (
        <div className="side-bar">
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Table</h6>
            </div>
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Menu</h6>
            </div>
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Kitchen</h6>
            </div>
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Delivery</h6>
            </div>
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Order</h6>
            </div>
            <div className="task">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">Invoice</h6>
            </div>
            <div className="close-register">
                <PrinterOutlined style={{fontSize: "xx-large"}}/>
                <h6 className="task-name">close register</h6>
            </div>
            
        </div>
    )
}

export default SideBar
