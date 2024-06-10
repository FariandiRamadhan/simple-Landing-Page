import { useEffect } from "react";

export function TagBrand(){
    const icon = ["fa-solid fa-cart-shopping", "fa-sharp fa-solid fa-chart-simple","fa-solid fa-circle-up"];
    const text = [" Best Seller", " Top Recomendations", " Higher Performance"];
    return(
        <div className="grid md:grid-cols-3  gap-y-4  justify-items-center bg-slate-800 text-yellow-400 text-lg font-bold p-4 min-[640px]:my-8 shadow-md shadow-black">
            {icon.map((e, counter)=>{
                return(
                    <h3  key={counter} className="cursor-default selection:bg-none hover:underline hover:decoration-red-600 hover:decoration-2 hover:underline-offset-8 hover:text-white"><i className={e}></i>{text[counter]}</h3>
                )
            })}
            
        </div>
    )
}

export default function LaptopColorSelection(){
    const color = ["white","silver","black","red","blue"]
    useEffect(()=>{
        const color_picker = document.querySelectorAll("#colorPicker")[0];
        const childCol_picker = Array.from(color_picker.children);
        childCol_picker.forEach((el)=>{
            const duplicatedChild = el.cloneNode(true);
            duplicatedChild.setAttribute('aria-hidden', true);
            color_picker.appendChild(duplicatedChild)
        });
    })
    return(
        <section className="h-auto">
            <h2 className="text-2xl font-bold mt-8">Comes with Various Colour</h2>
            <div className="w-full motion-safe:overflow-hidden">
                <div className="flex gap-4 py-4 motion-reduce:flex-wrap motion-safe:flex-nowrap motion-safe:animate-[scrolling_20s_forwards_linear_infinite] min-[240px]:h-90 min-[1024px]:h-96
                " id="colorPicker">
                    {color.map((e, index)=>{
                        return(
                            <img className="picture-conf" src={`./laptop${index}.jpg`} alt={e} key={index}/>        
                        )
                    })}                    
                </div>
            </div>
        </section>
    )
}