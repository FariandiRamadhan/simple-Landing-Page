export default function Footer(){
    return (
        <footer className="shadow-inner shadow-slate-950 bg-slate-800 py-4 px-8 text-justify rounded-t-lg -mt-1 grid grid-cols-3">
                <a href="./" className="text-4xl font-bold text-purple-500 cursor-default lg:text-6xl">FR</a>
                <section className=" col-span-2 my-2 lg:grid lg:grid-cols-2">
                    <p className="text-md font-bold text-slate-200 lg:text-xl">Creator:</p>
                    <p className="text-sm font-semibold lg:text-xl">Fariandi Ramadhan</p>
                    <p className="text-md font-bold text-slate-200 lg:text-xl lg:col-start-2 lg:row-start-1">Social Media:</p>
                    <p className="flex flex-col gap-1 text-sm lg:text-xl">
                        <a href="https://www.instagram.com/fari.rmdhn_/"><i className="fa-brands fa-instagram"></i> fari.rmdhn_</a>
                        <a href="https://www.facebook.com/share/zhzPHJupGuErccJs/?mibextid=qi2Omg"><i className="fa-brands fa-facebook"></i> fariandi ramadhan</a>
                        <a href="https://github.com/FariandiRamadhan"><i className="fa-brands fa-github"></i> fariandi ramadhan</a>
                    </p>
                </section>
                <hr className="col-span-3"/>
                <p className="text-white text-xs col-span-3 justify-self-center lg:text-lg">Fariandi Ramadhan@2024</p>
        </footer>
    )
}