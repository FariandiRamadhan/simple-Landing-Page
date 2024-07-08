export default function Card({align, template, title, image, sequent}){
    const objectDatas = [
        [
            <><span className="font-bold">16-Core</span> Processor</>,
            <>Smaller Core, Less Temperature</>,
            <><span className="font-bold">70%</span> Faster Processing</>,
            <>Less Power Consumption</>,
            <>Four-Speaker Sound System</>,
            <><span className="font-bold">5G</span> Connection Support</>,
            <><span className="font-bold">Up To 64 GB</span> Memory Support</>
        ],
        [
            <>Wide and Comfortable Keyboard</>,
            <><span className="font-bold">14&quot;</span> High Resolution Screen</>,
            <>Waterproved Design</>,
            <>Slim and Ligthweight</>
        ]
    ];
    const icon = [
        [
            "fa-microchip",
            "fa-minimize",
            "fa-bolt",
            "fa-battery-three-quarters",
            "fa-volume-high",
            "fa-wifi",
            "fa-memory"
        ],
        [
            "fa-keyboard",
            "fa-laptop",
            "fa-water",
            "fa-arrows-up-to-line"
        ]
    ];
    const optClassDiv = [
        "text-lg lg:text-xl grid grid-cols-[1fr_10fr] lg:grid-cols-[10fr_1fr] items-center",
        "text-lg lg:text-xl grid grid-cols-[1fr_10fr] items-center"
    ];
    const template_opt = template?template:'';
    const align_opt = align?align:'';
    let counter = 0;
return(
    <div className="grid min-[240px]:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 opacity-0 card">
        <div className={"cardtext " + align_opt}>
            <h3 className="text-xl font-bold lg:text-2xl mb-2 drop-shadow shadow-slate-600">{title}</h3>
            <div className={optClassDiv[sequent]}>
                {icon[sequent].map((ie,innerIndex)=>{
                    counter += 1;
                    return(<>
                        <i className={sequent == 0?`fa-solid ${ie} col-start-1 lg:col-start-2 lg:col-end-2`:`fa-solid ${icon[sequent][innerIndex]}`} key={new Date().getTime()}></i>
                        <p className={sequent == 0?`row-start-${counter} col-start-2 lg:col-start-1`:""} key={counter}>{objectDatas[sequent][innerIndex]}</p>
                        </>)
                })}
            </div>
        </div>
        <img src={image} alt="bgimage" className= {"w-full break-after-column rounded-md shadow-md shadow-slate-800 " + template_opt}/>
    </div>
)
}