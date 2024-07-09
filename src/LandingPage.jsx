import { useEffect, useCallback } from "react";
import HeaderNavbarWrapper from "./components/HeaderNavbarWrapper";
import Card from "./components/Card";
import cardEffect from "./data_and_functions/CardEffect";
import LaptopColorSelection, { TagBrand } from "./components/SmallSections";
import Footer from "./components/Footer";
import { intersectOptions, tableValues } from "./data_and_functions/allDatas";

export default function LandingPage(){
    const observerObj = useCallback((mycallback) =>{
        const observer = new IntersectionObserver(mycallback, intersectOptions);
        return observer;
    },[])
    useEffect(() => {
        const parent = document.getElementsByClassName("card");
        const parentBottomSection = document.getElementsByClassName("bottom-section")[0];

        const observer = observerObj(cardEffect);
        for (let index = 0; index < parent.length; index++) {
            observer.observe(parent[index]);
        }
        observer.observe(parentBottomSection);
    },[observerObj]);

    return(
        <>
        {/* This structure will be implemented soon*/}
        {/* Tailwind will be used for styling this web */}
        {/* https://unsplash.com/@clemhlrdt */}
        {/* https://unsplash.com/@alesnesetril */}
        {/* https://frepik.com */}
        <HeaderNavbarWrapper/>
        <main className=" bg-gray-300">
            <article className="grid grid-cols-1 gap-8 bg-gradient-to-r from-gray-100/95 to-neutral-500/90 py-8 px-10 lg:px-32" id="overview">
                <TagBrand/>
                <Card title="High Specs" image="./altumcode.jpg" align="lg:text-end" sequent={0}/>
                <Card title="Best Design" image="./keyboard.jpg" template="lg:col-start-1 lg:row-start-1" sequent={1}/>
                <LaptopColorSelection/>
            </article>
            <img src="./clement-helardot.jpg" alt="bgimage" className=" mx-auto opacity-90"/>
            <section className="px-10 py-12 bg-gradient-to-r from-gray-100/95 to-neutral-500/90 grid lg:grid-cols-2 md:gap-x-8 lg:px-32 bottom-section opacity-0">
                <h2 className="text-2xl font-bold max-md:mb-6">Performance and Efficiency</h2>
                <h3 className="text-lg  font-semibold after:content-['*'] after:text-blue-700">Specs</h3>
                <table className="table-auto lg:row-start-3 lg:row-span-4 transition-transform max-md:mb-6">
                    <tbody className="divide-y-2 divide-slate-500">
                    {
                        tableValues.map((current,counter)=>{
                            return <tr key={counter}><td className="w-36">{current[0]}</td><td>{current[1]}</td></tr>
                        })
                    }
                    </tbody>
                </table>
                <p className="text-justify lg:col-start-2 lg:row-start-1 lg:row-span-4 mb-6">
                    Auxus Vision Gen-V provides almost everything you need, High resolution Screen, CPU High Performance, multiple port, Battery Up to 24 hours, 
                    waterproved design, impact resistance makes you able to work from anywhere and anytime
                </p>
                <figure className="grid place-items-center text-white" style={{gridTemplateAreas:"ini"}}>
                    <i className="z-[2] fa-regular fa-circle text-6xl"  style={{gridArea:"ini"}}></i>
                    <i className="z-[2] fa-solid fa-play text-4xl"  style={{gridArea:"ini"}}></i>
                    <img src="./ales-nesetril.jpg"alt="aside_image" className="z-0 w-full shadow-lg shadow-slate-800 aspect-video" style={{gridArea:"ini"}}/>
                </figure>
            </section>
        </main>
        <Footer/>
        </>
    )
}