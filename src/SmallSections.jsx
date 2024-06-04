export function TagBrand(){
    const icon = ["fa-solid fa-cart-shopping", "fa-sharp fa-solid fa-chart-simple","fa-solid fa-circle-up"];
    const text = [" Best Seller", " Top Recomendations", " Higher Performance"];
    return(
        <div className="grid md:grid-cols-3  gap-y-4  justify-items-center bg-slate-800 text-yellow-400 text-lg font-bold p-4 my-8 shadow-md shadow-black">
            {icon.map((e, counter)=>{
                return(
                    <h3  key={counter} className="hover:underline hover:decoration-red-600 hover:decoration-2 hover:underline-offset-8 hover:text-white"><i className={e}></i>{text[counter]}</h3>
                )
            })}
            
        </div>
    )
}