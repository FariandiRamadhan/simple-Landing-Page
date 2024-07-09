import { useState,useCallback } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import OrderModal from "./OrderModal";

export default function HeaderNavbarWrapper() {
    const [visible,setVisible] = useState(false);
    const handleOrder = useCallback(()=>{
        setVisible(visible === false?true:false)
    },[visible])
    return <>
        <Header handleOrder={handleOrder}/>
        <Navbar handleOrder={handleOrder}/>
        {visible && <OrderModal handleOrder={handleOrder}/>}
    </>
}