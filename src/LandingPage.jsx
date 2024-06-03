import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function LandingPage(){
    return(
        <>
        {/* This structure will be implemented soon*/}
        {/* Tailwind will be used for styling this web */}
        <Navbar/>
        <Header/>
        <main className=" bg-gray-300">
            <article>
                <section>
                    <div className="card grid grid-cols-2 p-4 w-full h-48 bg-lime-200/60 backdrop-blur-sm">
                        <div className="text-right">
                            <h3>card 1</h3>
                        </div>
                        <div className="bg-blue-900 h-full w-full">

                        </div>
                    </div>
                    <div className="card grid grid-cols-2 p-4 w-full h-48 bg-lime-200/60 backdrop-blur-sm">
                        <div className="text-right">
                            <h3>card 2</h3>
                        </div>
                        <div className="bg-blue-900 h-full w-full">

                        </div>
                    </div>
                </section>
            </article>
            <img src="./clement-helardot.jpg" alt="bgimage" className=" mx-auto opacity-90"/>
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
                                <td>14&quot; Wide screen</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Specs</td>
                                <td>Desc</td>
                            </tr>
                        </tfoot>
                    </table>
                    <p className="text-justify lg:col-start-2 lg:row-start-1 lg:row-span-4 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia, ex repellat repudiandae qui perferendis doloremque! Magni porro perferendis nostrum ratione sed quasi consequatur mollitia assumenda tenetur. Non, at. Placeat!
                    </p>
                </section>
            </article>
        </main>
        <Footer/>
        </>
    )
}