import { useCallback } from "react";

export default function Navbar(){
    const handleClick = useCallback(()=>{
        const icon = document.getElementById('icon');
        const icon_tol = document.getElementById('links');
        icon_tol.classList.toggle("block");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-xmark");
        if (icon_tol.classList.contains("hidden")) {
            icon_tol.classList.remove("hidden");
            icon.classList.remove("fa", "fa-bars");
          } else {
            icon_tol.classList.add("hidden");
            icon.classList.add("fa", "fa-bars");
          }
    },[])
    return (<nav className="fixed top-0 left-0 right-0 text-white z-10 flex flex-col bg-slate-600/65">
            <div className="relative overflow-hidden flex items-center px-8 flex-wrap min-[240px]:h-16 gap-2 min-[1024px]:h-28 min-[1300px]:h-20" >
                <div className="flex-grow text-4xl font-bold text-purple-500 hover:cursor-default">LOGO</div>
                <div className="hidden text-white px-4 md:inline min-[1024px]:text-2xl min-[1300px]:text-sm">
                    <a href="#overview" className="nav-item">Overview</a>
                    <a href="#hr" className="nav-item">Accessories</a>
                    <a href="#hr" className="nav-item">Support</a>
                </div>
                <a href="#hr" className="px-2 py-2 bg-cyan-400 rounded-lg hover:bg-cyan-500 font-semibold min-[1024px]:text-2xl min-[1300px]:text-sm">Order Now</a>
                <button className="hover:bg-slate-500 w-10 h-10 flex justify-center items-center md:hidden" onClick={handleClick} id="hamburg">
                    <i className="fa fa-bars" id="icon"></i>
                </button>
            </div>
            <div className="relative hidden text-white bg-slate-600/65 px-2 py-4" id="links">
                <a href="#hr" className="drop-nav-item">Overview</a>
                <a href="#hr" className="drop-nav-item">Accessories</a>
                <a href="#hr" className="drop-nav-item">Support</a>
            </div>
    </nav>)
}

window.addEventListener("scroll", ()=>{
    const nav = document.querySelector('nav');
    if (document.documentElement.scrollTop < 200 && nav.classList.contains("bg-slate-600")) {
        nav.classList.replace("bg-slate-600","bg-slate-600/65");
    }
    else if (document.documentElement.scrollTop > 200 && nav.classList.contains("bg-slate-600/65")) {
        nav.classList.replace("bg-slate-600/65","bg-slate-600");
      }

});