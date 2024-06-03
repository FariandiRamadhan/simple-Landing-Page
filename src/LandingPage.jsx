export default function LandingPage(){
    return(
        <>
        {/* This structure will be implemented soon*/}
        {/* Tailwind will be used for styling this web */}
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
        <header className="relative z-0 flex items-center bg-cover bg-hero-pattern bg-slate-300 bg-fixed max-[480px]:bg-blend-luminosity max-[480px]:bg-[length:100svw_50svh] md:bg-center sm:h-svh max-[480px]:h-[48svh] max-[1030px]:text-center min-[1000px]:h-[60svh] min-[1300px]:h-screen">
            <div id="tagline" className="absolute text-white w-full px-8 lg:px-20">
                <h1 className="font-extrabold min-[240px]:text-3xl min-[1024px]:text-6xl min-[1300px]:text-5xl">Auxus Vision Gen-V</h1>
                <h2 className="font-bold min-[240px]:text-xl min-[240px]:mb-4 lg:text-3xl lg:mb-8 ">For excellent performance</h2>
                <h3 className="min-[240px]:text-md mb-8 lg:font-bold lg:text-lg">Auxus Vision Gen-V offers a new design with better performance</h3>
                <a href="#hr" className="p-2 bg-transparent rounded-lg hover:bg-cyan-500 ring-offset-2 ring ring-cyan-400 duration-500 font-semibold" id="orderN">Order Now</a>
            </div>
        </header>
        <main className=" bg-gray-300">
            <article>
                <section>
                    <div className="card w-full h-48 bg-lime-200">card 1</div>
                    <div className="card w-full h-48 bg-lime-200">card 2</div>
                </section>
            </article>
            <article>
                <section>
                    <table className="table-auto transition-transform max-md:mb-6 text-center">
                        <thead>
                            <tr>
                                <th className="w-36">Specs</th>
                                <th>Desc</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-black">
                            <tr>
                                <td>CPU</td>
                                <td>16 Core CPU</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>16 GB DDR4</td>
                            </tr>
                            <tr>
                                <td>Screen</td>
                                <td>14" Wide screen</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Specs</td>
                                <td>Desc</td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </article>
        </main>
        <footer>
            <h3>this is footer</h3>
        </footer>
        </>
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