import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card, {cardEffect} from "./Card";
import Footer from "./Footer";
import LaptopColorSelection, { TagBrand } from "./SmallSections";

export default function LandingPage(){
    let options = {
        // root: document.querySelector("header"),
        rootMargin: "50px",
        threshold: [0.18,0.5,1.0],
    };
    function observerObj(mycallback){
        const observer = new IntersectionObserver(mycallback, options);
        return observer;
    }

    useEffect(() => {
        const parent = document.getElementsByClassName("card");
        const parentBottomSection = document.getElementsByClassName("bottom-section")[0];

        const observer = observerObj(cardEffect);
        for (let index = 0; index < parent.length; index++) {
            observer.observe(parent[index]);
        }
        observer.observe(parentBottomSection);
    });

    return(
        <>
        {/* This structure will be implemented soon*/}
        {/* Tailwind will be used for styling this web */}
        {/* https://unsplash.com/@clemhlrdt */}
        {/* https://unsplash.com/@alesnesetril */}
        {/* https://frepik.com */}
        <Navbar/>
        <Header/>
        <main className=" bg-gray-300">
            <article className="grid grid-cols-1 gap-8 bg-gradient-to-r from-gray-100/95 to-neutral-500/90 py-8 px-10 lg:px-32" id="overview">
                <TagBrand/>
                <Card title="High Specs" image="./altumcode.jpg" align="lg:text-end" sequent={0}/>
                <Card title="Best Design" image="./keyboard.jpg" template="lg:col-start-1 lg:row-start-1" sequent={1}/>
                <LaptopColorSelection/>
            </article>
            <img src="./clement-helardot.jpg" alt="bgimage" className=" mx-auto opacity-90"/>
            <section className="px-10 py-12 bg-gradient-to-r from-gray-100/95 to-neutral-500/90 grid lg:grid-cols-2 md:gap-x-8 lg:px-32 bottom-section opacity-0">
                <h2 className="text-2xl font-bold max-md:mb-6">Performance and Efficiency{window.screen.width} {window.screen.height}</h2>
                <h3 className="text-lg  font-semibold after:content-['*'] after:text-blue-700">Specs</h3>
                <table className="table-auto lg:row-start-3 lg:row-span-4 transition-transform max-md:mb-6">
                    <tbody className="divide-y-2 divide-slate-500">
                    <tr>
                        <td className="w-36">Battery</td>
                        <td>30WHrs,2S1P,2-cell Li-ion</td>
                    </tr>
                    <tr>
                        <td>CPU</td>
                        <td>Intei X-99</td>
                    </tr>
                    <tr>
                        <td>Memory</td>
                        <td>16 GB DDR4</td>
                    </tr>
                    <tr>
                        <td>Screen Size</td>
                        <td>14&quot;</td>
                    </tr>
                    <tr>
                        <td>Screen Resolution</td>
                        <td>1366*768 pixels</td>
                    </tr>
                    <tr>
                        <td>External Memory</td>
                        <td>512 GB SSD 2.5&quot; SATA</td>
                    </tr>
                    <tr>
                        <td>Physical Size</td>
                        <td>34.8*24.2*2.53 cm</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>2 Kg</td>
                    </tr>
                    </tbody>
                </table>
                <p className="text-justify lg:col-start-2 lg:row-start-1 lg:row-span-4 mb-6">
                    Auxus Vision Gen-V provides almost everything you need, High resolution Screen, CPU High Performance, multiple port, Battery Up to 24 hours, 
                    waterproved design, impact resistance makes you able to work from anywhere and anytime
                </p>
                <figure className="grid place-items-center text-white" style={{gridTemplateAreas:"ini"}}>
                    <i className="z-10 fa-regular fa-circle text-6xl"  style={{gridArea:"ini"}}></i>
                    <i className="z-10 fa-solid fa-play text-4xl"  style={{gridArea:"ini"}}></i>
                    <img src="./ales-nesetril.jpg"alt="aside_image" className="z-0 w-full shadow-lg shadow-slate-800 aspect-video" style={{gridArea:"ini"}}/>
                </figure>
            </section>
        </main>
        <Footer/>
        </>
    )
}