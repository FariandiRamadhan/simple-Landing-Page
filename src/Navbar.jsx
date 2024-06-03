export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col bg-slate-600/65 text-white">
            <div className="relative flex items-center h-20 px-8 gap-2">
                <div className="flex-grow text-4xl font-bold -translate-y-1 hover:cursor-default">Logo</div>
                <div className="flex items-center leading-10">
                    <a href="lama" className="nav-item">Overview</a>
                    <a href="accesories" className="nav-item">Accesories</a>
                    <a href="support" className="nav-item">Support</a>
                </div>
                <a href="#hr" className="px-2 py-2 bg-cyan-400 rounded-lg hover:bg-cyan-500 font-semibold min-[1024px]:text-2xl min-[1300px]:text-sm">Order Now</a>
                <button className="hover:bg-slate-500 w-10 h-10 flex justify-center items-center md:hidden" onClick={myFunction} id="hamburg">
                    <i className="fa fa-bars" id="icon"></i>
                </button>
            </div>
            <div className="relative hidden text-white bg-slate-600/65 px-2 py-4" id="links">
                <a href="#hr" className="drop-nav-item">Overview</a>
                <a href="#hr" className="drop-nav-item">Accessories</a>
                <a href="#hr" className="drop-nav-item">Support</a>
            </div>
        </nav>
    )
}

function myFunction(){
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
}

window.addEventListener("scroll", (e)=>{
    const nav = document.querySelector('nav');
    if (document.documentElement.scrollTop < 200 && nav.classList.contains("bg-slate-600")) {
        nav.classList.replace("bg-slate-600","bg-slate-600/65");
    }
    else if (document.documentElement.scrollTop > 200 && nav.classList.contains("bg-slate-600/65")) {
        nav.classList.replace("bg-slate-600/65","bg-slate-600");
      }

});