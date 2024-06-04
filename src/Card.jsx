export default function Card({align, template, title, image, children}){
    const template_opt = template?template:'';
    const align_opt = align?align:'';
return(
    <div className="grid min-[240px]:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 opacity-0 card">
        <div className={"cardtext " + align_opt}>
            <h3 className="text-xl font-bold lg:text-2xl mb-4 drop-shadow shadow-slate-600">{title}</h3>
            { children }
        </div>
        <img src={image} alt="bgimage" className= {"w-full break-after-column rounded-md shadow-md shadow-slate-800 " + template_opt}/>
    </div>
)
}

export function cardEffect(entries, observer){
    entries.forEach((entry) => {
      // console.log(entry.target)
      if(entry.isIntersecting){
          entry.target.classList.replace("opacity-0","opacity-100");
          entry.target.classList.add("origin-bottom");
          entry.target.classList.add("transition-opacity");
          entry.target.classList.add("duration-500");
      }else{
          entry.target.classList.replace("opacity-100","opacity-0");
          entry.target.classList.remove("origin-bottom");
          entry.target.classList.remove("transition-opacity");
          entry.target.classList.remove("duration-500");
      }
        
    });
}