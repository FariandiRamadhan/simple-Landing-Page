import PropTypes from 'prop-types';
// import { memo } from 'react';

function Header ({handleOrder}){
    console.log("header renderred");
    return(
        <header className="relative z-0 flex items-center bg-cover bg-hero-pattern bg-slate-300 bg-fixed max-[480px]:bg-blend-luminosity max-[480px]:bg-[length:100svw_50svh] md:bg-center sm:h-svh max-[480px]:h-[48svh] max-[1030px]:text-center min-[1000px]:h-[60svh] min-[1300px]:h-screen">
            <div id="tagline" className="absolute text-white w-full px-8 lg:px-20">
                <h1 className="font-extrabold min-[240px]:text-3xl min-[1024px]:text-6xl min-[1300px]:text-5xl">Auxus Vision Gen-V</h1>
                <h2 className="font-bold min-[240px]:text-xl min-[240px]:mb-4 lg:text-3xl lg:mb-8 ">For excellent performance</h2>
                <h3 className="min-[240px]:text-md mb-8 lg:font-bold lg:text-lg">Auxus Vision Gen-V offers a new design with better performance</h3>
                <a href="#order now" className="p-2 bg-transparent rounded-lg hover:bg-cyan-500 ring-offset-2 ring ring-cyan-400 duration-500 font-semibold" onClick={(e) => {e.preventDefault;handleOrder(true)}}>Order Now</a>
            </div>
        </header>
    )
}
Header.propTypes = {
    handleOrder:PropTypes.func
}
// Header.displayName = "Header";
// button tekan value ke parent masuk ke ordermodal sebagai props

export default Header;