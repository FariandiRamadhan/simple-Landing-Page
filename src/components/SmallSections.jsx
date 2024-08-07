import {memo} from 'react';
import { smallSectionIcon, smallSectionText, smallSectionColor as color } from "../data_and_functions/allDatas"

const TagBrand = memo(function TagBrand(){
    return(
        <div className="grid md:grid-cols-3  gap-y-4  justify-items-center bg-slate-800 text-yellow-400 text-lg font-bold p-4 min-[640px]:my-8 shadow-md shadow-black">
            {smallSectionIcon.map((e, counter)=>{
                return(
                    <h3  key={counter} className="cursor-default selection:bg-none hover:underline hover:decoration-red-600 hover:decoration-2 hover:underline-offset-8 hover:text-white"><i className={e}></i>{smallSectionText[counter]}</h3>
                )
            })}
            
        </div>
    )
})

export default function LaptopColorSelection(){
    return(
        <section className="h-auto">
            <h2 className="text-2xl font-bold mt-8">Comes with Various Colour</h2>
            <div className="slider  motion-safe:overflow-hidden" style={{"--width":"220px","--height":"200px","--quantity":color.length}}>
            <div className="list">
                {color.map((e, index)=>{
                    return(
                        <div className="item" style={{"--position":index}}  key={index}>
                            <img className="picture-conf" src={`./laptop${index}.jpg`} alt={e}/>        
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
    )
}
export {TagBrand};