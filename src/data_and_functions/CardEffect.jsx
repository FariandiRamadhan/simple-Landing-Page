export default function cardEffect(entries){
    entries.forEach((entry) => {
      // console.log(entry.target)
      if(entry.isIntersecting){
          entry.target.classList.replace("opacity-0","opacity-100");
          entry.target.classList.add("origin-bottom");
          entry.target.classList.add("transition-opacity");
          entry.target.classList.add("duration-200");
      }else{
          entry.target.classList.replace("opacity-100","opacity-0");
          entry.target.classList.remove("origin-bottom");
          entry.target.classList.remove("transition-opacity");
          entry.target.classList.remove("duration-200");
      }
        
    });
}