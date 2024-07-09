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
const smallSectionColor = ["white","silver","black","red","blue"];
const optClassDiv = [
    "text-lg lg:text-xl grid grid-cols-[1fr_10fr] lg:grid-cols-[10fr_1fr] items-center",
    "text-lg lg:text-xl grid grid-cols-[1fr_10fr] items-center"
];
const tableValues = [
    ["battery", "30WHrs,2S1P,2-cell Li-ion"],
    ["CPU","Intei X-99"],
    ["Memory","16 GB DDR4"],
    ["Screen Size", "14&quot;"],
    ["Screen Resolution","1366*768 pixels"],
    ["External Memory","512 GB SSD 2.5&quot; SATA"],
    ["Physical Size", "34.8*24.2*2.53 cm"],
    ["Weight", "2 Kg"]
];
let intersectOptions = {
    // root: document.querySelector("header"),
    rootMargin: "50px",
    threshold: [0.18,0.5,1.0],
};

const smallSectionIcon = ["fa-solid fa-cart-shopping", "fa-sharp fa-solid fa-chart-simple","fa-solid fa-circle-up"];
const smallSectionText = [" Best Seller", " Top Recomendations", " Higher Performance"];
export {objectDatas, icon, optClassDiv, tableValues, intersectOptions, smallSectionIcon, smallSectionText, smallSectionColor};