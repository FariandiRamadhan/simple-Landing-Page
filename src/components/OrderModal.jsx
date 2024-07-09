import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
OrderModal.propTypes = {
    handleOrder:PropTypes.func
}
export default function OrderModal({handleOrder}){
    const [counter, setCounter] = useState(1);
    const [price,setPrice] = useState(399);
    useEffect(()=>{
        setPrice(parseInt(counter) * 399)
    },[counter]);
    console.log("modal renderred");
    return (<>
        <div className='absolute grid top-0 bottom-0 left-0 right-0 z-10 place-items-center'>
            <div className="bg-zinc-800/70 w-full h-full" onClick={() => {handleOrder(true)}}></div>
            <div className='absolute z-20 grid grid-cols-[repeat(2,minmax(60px,180px))_minmax(80px,400px)] grid-rows-[10px_30px_repeat(3,6rem)] gap-x-6 p-8 bg-slate-100'>
                <button className='absolute z-30 top-2 right-2 hover:bg-slate-400 size-6 rounded-full' onClick={() => {handleOrder(true)}}><i className='fa-solid fa-xmark'></i></button>
                <h2 className='col-start-3 row-start-2 font-bold text-lg' id='modal-title'>Auxus Vision Gen-V</h2>
                <img src='./clement-helardot.jpg' alt='Auxus Vision Gen-V' className='h-full col-span-2 row-start-2 row-span-4'/>
                <div className='col-start-3 row-start-3 row-span-2' id='modal-body'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores, soluta explicabo hic sequi consectetur aliquid quo pariatur deserunt dolorem sapiente deleniti possimus blanditiis? Pariatur repellat dolorem minima repellendus incidunt?</p>
                    <button onClick={()=>counter >= 2?setCounter(counter-1):setCounter(1)} className='shadow-sm shadow-black bg-slate-200 size-6 font-bold hover:bg-slate-300'>-</button>
                    <p className='inline-block text-center w-12'>{counter}</p>
                    <button onClick={()=>setCounter(counter+1)} className='shadow-sm shadow-black bg-slate-200 size-6 font-bold hover:bg-slate-300'>+</button>
                    <p className='text-green-500 text-lg font-bold'>${price}</p>
                </div>
                <button className="col-start-3 row-start-5 h-8 bg-cyan-500 text-white self-end rounded-lg hover:bg-cyan-600" onClick={() => {alert("Thanks for purchasing");handleOrder(true)}}>Checkout</button>
            </div>
        </div>
        </>)
}